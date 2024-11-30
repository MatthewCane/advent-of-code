from pathlib import Path


with Path(Path(__file__).parent, "../input.txt").open() as f:
    INPUT = f.readlines()

codes = list()

for line in INPUT:
    digits = list()
    line = line.strip()
    for char in line:
        if char.isdigit():
            digits.append(char)
    if len(digits) == 1:
        codes.append(int(digits[0] + digits[0]))
    else:
        codes.append(int(digits[0] + digits[-1]))

print(sum(codes))
