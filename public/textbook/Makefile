FILES=$(wildcard *.tex)

textbook.pdf: $(FILES)
	rm -f answers.tex
	touch answers.tex
	pdflatex textbook.tex
	cp textbook.ans answers.tex
	makeindex textbook
	pdflatex textbook.tex
	pdflatex textbook.tex
	mv -f textbook.pdf textbook-undistilled.pdf
	gs -q -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=textbook.pdf textbook-undistilled.pdf

textbook-print.pdf: $(FILES)
	rm -f answers.tex
	touch answers.tex
	pdflatex -jobname textbook-print textbook.tex
	cp textbook.ans answers.tex
	makeindex textbook-print
	pdflatex -jobname textbook-print textbook.tex
	pdflatex -jobname textbook-print textbook.tex
	mv -f textbook-print.pdf textbook-print-undistilled.pdf
	gs -q -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=textbook-print.pdf textbook-print-undistilled.pdf

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
