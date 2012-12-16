WIDTH=150

IMAGES=$(wildcard *[a-z].jpg)
RESIZED_IMAGES=$(patsubst %.jpg,%-$(WIDTH).jpg,$(IMAGES))

all: $(RESIZED_IMAGES)

clean:
	rm -f *-$(WIDTH).jpg

%-$(WIDTH).jpg: %.jpg
	convert -geometry $(WIDTH)x10000 $< $@


