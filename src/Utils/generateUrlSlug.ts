export function generateUrlSlug(title: string) {
    const url = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ /g, "-");
    return url;
  }