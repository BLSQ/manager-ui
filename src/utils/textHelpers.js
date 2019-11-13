export const dasherize = text => {
  return text.replace(/^([A-Z])|[\s\._](\w)/g, function(match, p1, p2, offset) {
    if (p2) return "-" + p2.toLowerCase();
    return p1.toLowerCase();
  });
};

export const getName = resource =>
  resource
    ? resource.alternateName ||
      resource.name ||
      resource.displayShortName ||
      resource.displayName
    : "";
