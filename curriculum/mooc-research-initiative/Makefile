full-submission.pdf: full-submission.tex references.bib
	pdflatex full-submission.tex
	biber full-submission
	pdflatex full-submission.tex
	pdflatex full-submission.tex

clean:
	rm -f *.aux *.bbl *.bcf *.blg *.out *.log *.run.xml
