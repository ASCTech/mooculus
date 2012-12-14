# just use recent data to build the model
data <- read.csv("enrollments.ssv",sep=" ",header=FALSE)
data <- subset(data, data$V2 > 10000)

dates <- data$V1
students <- data$V2

model <- lm(students ~ dates)

# reload the data
data <- read.csv("enrollments.ssv",sep=" ",header=FALSE)
dates <- data$V1
students <- data$V2

students_per_second <- model$coefficients[2]
students_per_minute <- 60 * students_per_second
students_per_hour <- 60 * students_per_minute

cat(students_per_hour,"students per hour\n")
cat(students_per_minute,"students per minute\n")
cat(1/students_per_minute,"minutes per student\n")
cat(1/students_per_second,"seconds per student\n")

origin <- as.POSIXct(strptime("1970-01-01 00:00:00", "%Y-%m-%d %H:%M:%S", tz="UTC"))

data$V1 <- as.POSIXlt(data$V1,format="%s",origin=origin)

pdf("enrollments.pdf")
plot(data$V1,data$V2,type="b",xlab="Date",ylab="Students",main="Coursera Enrollments\nin Calculus One")
abline(model,col="red")
dev.off()

rollout <- as.POSIXlt(strptime("2013-01-07 00:00:00", "%Y-%m-%d %H:%M:%S", tz="UTC"),origin=origin)

rollout_seconds <- difftime(rollout,origin,units="secs")

prediction <- model$coefficients[2] * as.double(rollout_seconds) + model$coefficients[1]
cat(round(prediction),"students on",format(rollout,format="%B %e, %Y"),"\n")
