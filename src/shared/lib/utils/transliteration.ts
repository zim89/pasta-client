export function transliterate(text: string) {
  // prettier-ignore
  const cyrillicToLatin = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh',
        'з': 'z', 'и': 'i', 'ї': 'yi', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 
        'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ь': '', 'ю': 'yu', 'я': 'ya'
    } as { [P in string]: string };

  return text
    .split('')
    .map(char => cyrillicToLatin[char.toLowerCase()] || char.toLowerCase())
    .join('')
}
