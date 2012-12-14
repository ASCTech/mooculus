echo $(date +%s) $1 >> enrollments.ssv
R --file=plot.R
