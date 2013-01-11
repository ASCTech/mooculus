FILES=$(wildcard *.tex)

textbook.pdf: $(FILES)
	rm -f answers.tex
	touch answers.tex
	pdflatex textbook.tex
	cp textbook.ans answers.tex
	makeindex textbook
	pdflatex textbook.tex
	pdflatex textbook.tex

textbook-print.pdf: $(FILES)
	rm -f answers.tex
	touch answers.tex
	pdflatex -jobname textbook-print textbook.tex
	cp textbook.ans answers.tex
	makeindex textbook
	pdflatex -jobname textbook-print textbook.tex
	pdflatex -jobname textbook-print textbook.tex

install: textbook.pdf textbook-print.pdf
	mv -f textbook-print.pdf mooculus-print.pdf
	mv -f textbook.pdf mooculus.pdf
	git add mooculus.pdf
	git add mooculus-print.pdf

clean:
	rm -f *.swp
	rm -f *.ans
	rm -f *.aux
	rm -f *.idx
	rm -f *.lof
	rm -f *.lot
	rm -f *.out
	rm -f *.toc
	rm -f *.log
	rm -f *.pdf
