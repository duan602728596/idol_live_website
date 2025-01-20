/* 处理转义字符 */
export function handlingEscapeCharacters(s: string): string {
  return s.replace(/\\"/g, '"');
}

/* 判断是哪种标签类型 */
function isAnchorElement(element: HTMLAnchorElement | HTMLImageElement): element is HTMLAnchorElement {
  return element.tagName.toLowerCase() === 'a';
}

/* 查找a标签，并格式化 */
export function formatLink(item: HTMLElement): void {
  const linkElement: NodeListOf<HTMLAnchorElement> = item.querySelectorAll<HTMLAnchorElement>('a'),
    imageElement: NodeListOf<HTMLImageElement> = item.querySelectorAll<HTMLImageElement>('img');

  for (const element of [...linkElement, ...imageElement]) {
    if (isAnchorElement(element)) {
      let href: string | null = element.getAttribute('href');

      if (!href) continue;

      if (!/^https?:\/{2}/.test(href)) {
        href = new URL(href, 'https://weibo.com/').toString();
      }

      element.setAttribute('href', href);
      element.target = '_blank';
    } else {
      const src: string | null = element.getAttribute('src');

      if (!src) continue;

      const newSrc: string = src.replace(/^\\"/, '').replace(/\\"$/, '');

      element.src = `/proxy_image?u=${ encodeURIComponent(newSrc) }`;
    }
  }
}