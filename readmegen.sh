#/bin/sh

find . -type d | while read x; do
  readme="${x}/README.md"
  echo `basename "$x"` > "$readme"
  echo "======" >> "$readme"
  echo "" >> "$readme"
  echo "Links" >> "$readme"
  echo "------" >> "$readme"
  echo "+ link1" >> "$readme" 
  echo "+ link2" >> "$readme"
  echo "" >> "$readme"
  echo "Notes" >> "$readme"
  echo "------" >> "$readme"
  echo "+ note1" >> "$readme" 
  echo "+ note2" >> "$readme"
done

