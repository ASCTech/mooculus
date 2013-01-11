FILES=$(wildcard *.tex)

textbook.pdf: $(FILES)
	touch answers.tex
	pdflatex textbook.tex
#	cp textbook.ans answers.tex
	makeindex textbook
	pdflatex textbook.tex
	pdflatex textbook.tex

textbook-print.pdf: $(FILES)
	touch answers.tex
	pdflatex textbook.tex
	cp textbook.ans answers.tex
	pdflatex textbook.tex
	pdflatex textbook.tex


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
