(TeX-add-style-hook "cow"
 (lambda ()
    (TeX-add-symbols
     "drawfoot"
     "drawhorn"
     "draweye"
     "headpath")
    (TeX-run-style-hooks
     "tikz"
     "preview"
     "active"
     "tightpage"
     "latex2e"
     "art11"
     "article"
     "11pt")))

