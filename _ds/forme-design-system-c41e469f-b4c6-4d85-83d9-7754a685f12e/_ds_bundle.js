/* @ds-bundle: {"format":4,"namespace":"FORMEDesignSystem_c41e46","components":[{"name":"BrandCard","sourcePath":"components/commerce/BrandCard.jsx"},{"name":"CartItem","sourcePath":"components/commerce/CartItem.jsx"},{"name":"CollectionCard","sourcePath":"components/commerce/CollectionCard.jsx"},{"name":"OrderSummary","sourcePath":"components/commerce/OrderSummary.jsx"},{"name":"Price","sourcePath":"components/commerce/Price.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"ProductGallery","sourcePath":"components/commerce/ProductGallery.jsx"},{"name":"Rating","sourcePath":"components/commerce/Rating.jsx"},{"name":"WishlistButton","sourcePath":"components/commerce/WishlistButton.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Media","sourcePath":"components/core/Media.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Drawer","sourcePath":"components/feedback/Drawer.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastRegion","sourcePath":"components/feedback/Toast.jsx"},{"name":"FilterGroup","sourcePath":"components/filters/FilterGroup.jsx"},{"name":"PriceRange","sourcePath":"components/filters/PriceRange.jsx"},{"name":"SORT_OPTIONS","sourcePath":"components/filters/SortControl.jsx"},{"name":"SortControl","sourcePath":"components/filters/SortControl.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Dropdown","sourcePath":"components/forms/Dropdown.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityControl","sourcePath":"components/forms/QuantityControl.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"VariantPicker","sourcePath":"components/forms/VariantPicker.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"CategoryPill","sourcePath":"components/navigation/CategoryPill.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"}],"sourceHashes":{"components/commerce/BrandCard.jsx":"adf789a0fa2d","components/commerce/CartItem.jsx":"3c8b8ba67c83","components/commerce/CollectionCard.jsx":"1b656b8e6aa3","components/commerce/OrderSummary.jsx":"cb45c9b4499f","components/commerce/Price.jsx":"0ce67ec1334d","components/commerce/ProductCard.jsx":"dda3abf25b73","components/commerce/ProductGallery.jsx":"3d33ddd7a7f1","components/commerce/Rating.jsx":"0c1a95271f89","components/commerce/WishlistButton.jsx":"5e4ba97fad33","components/core/Button.jsx":"d5a99e64734c","components/core/Icon.jsx":"e1b6b6799ec5","components/core/IconButton.jsx":"20748664bf33","components/core/Media.jsx":"86ec4cc8f19f","components/core/SectionHeader.jsx":"e5b420de03c9","components/core/Tag.jsx":"f229cda70fdb","components/core/Wordmark.jsx":"7dfcd4326a95","components/feedback/Drawer.jsx":"9d28ea338a95","components/feedback/Modal.jsx":"bfd26725d649","components/feedback/Toast.jsx":"e7ba1d0d711e","components/filters/FilterGroup.jsx":"a0735277f1f5","components/filters/PriceRange.jsx":"49927bac9e0b","components/filters/SortControl.jsx":"e5cd55080fb0","components/forms/Checkbox.jsx":"c76b8cd87c32","components/forms/Dropdown.jsx":"4a171c8c41a9","components/forms/Input.jsx":"4589d08c4020","components/forms/QuantityControl.jsx":"e486908def9b","components/forms/SearchBar.jsx":"77b0c1fd9236","components/forms/VariantPicker.jsx":"5888efb3ee1b","components/navigation/Breadcrumbs.jsx":"a2a44428645b","components/navigation/CategoryPill.jsx":"b5de1fecc322","components/navigation/Footer.jsx":"27c70c300e3c","components/navigation/Header.jsx":"5e3ce96e83ed","components/navigation/Pagination.jsx":"7ba4b37b97af","ui_kits/marketplace/App.jsx":"d3d1889c6a6b","ui_kits/marketplace/Cart.jsx":"b5ac57e285f9","ui_kits/marketplace/Category.jsx":"0701c0a936aa","ui_kits/marketplace/Home.jsx":"fd3a5d0a452b","ui_kits/marketplace/Product.jsx":"6d1a015460c2","ui_kits/marketplace/Search.jsx":"c802ec38a65b","ui_kits/marketplace/data.js":"7e0f0e44a725"},"inlinedExternals":[],"unexposedExports":[{"name":"formatMoney","sourcePath":"components/commerce/Price.jsx"}]} */

(() => {

const __ds_ns = (window.FORMEDesignSystem_c41e46 = window.FORMEDesignSystem_c41e46 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/Price.jsx
try { (() => {
const formatMoney = (n, currency = 'USD') => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
  minimumFractionDigits: n % 1 ? 2 : 0,
  maximumFractionDigits: 2
}).format(n);
function Price({
  amount,
  compareAt,
  currency = 'USD',
  size = 'md',
  showDiscount = false,
  prefix,
  className = ''
}) {
  const off = compareAt && compareAt > amount ? Math.round((1 - amount / compareAt) * 100) : 0;
  return /*#__PURE__*/React.createElement("span", {
    className: 'fm-price fm-pricebox' + (size !== 'md' ? ' fm-pricebox--' + size : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("span", null, prefix ? prefix + ' ' : '', formatMoney(amount, currency)), off > 0 && /*#__PURE__*/React.createElement("s", {
    className: "fm-pricebox__was"
  }, formatMoney(compareAt, currency)), off > 0 && showDiscount && /*#__PURE__*/React.createElement("span", {
    className: "fm-pricebox__off"
  }, "\u2212", off, "%"));
}
Object.assign(__ds_scope, { formatMoney, Price });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Price.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LUCIDE_SRC = 'https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js';
let loader = null;
function loadLucide() {
  if (typeof window === 'undefined' || window.lucide) return Promise.resolve();
  if (!loader) {
    loader = new Promise(resolve => {
      const s = document.createElement('script');
      s.src = LUCIDE_SRC;
      s.onload = resolve;
      s.onerror = resolve;
      document.head.appendChild(s);
    });
  }
  return loader;
}
const toPascal = n => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());

/** Lucide outline icon rendered at FORME's 1.5 stroke. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.5,
  filled = false,
  className,
  style,
  ...rest
}) {
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    if (!window.lucide) loadLucide().then(() => tick(x => x + 1));
  }, []);
  const lib = typeof window !== 'undefined' && window.lucide && (window.lucide.icons || window.lucide);
  let node = lib ? lib[toPascal(name)] : null;
  let children = [];
  if (node) children = node[0] === 'svg' ? node[2] || [] : node;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, rest), children.map(([tag, attrs], i) => React.createElement(tag, {
    ...attrs,
    key: i
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/commerce/OrderSummary.jsx
try { (() => {
function OrderSummary({
  subtotal = 0,
  shipping,
  discount = 0,
  tax,
  freeShippingAt = 250,
  showProgress = true,
  className = '',
  children
}) {
  const ship = shipping !== undefined ? shipping : subtotal >= freeShippingAt || subtotal === 0 ? 0 : 18;
  const total = subtotal - discount + ship + (tax || 0);
  const left = Math.max(0, freeShippingAt - subtotal);
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-summary ' + className
  }, showProgress && subtotal > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__progress"
  }, /*#__PURE__*/React.createElement("span", null, left > 0 ? __ds_scope.formatMoney(left) + ' away from free shipping' : 'Free shipping unlocked'), /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__bar"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: Math.min(100, subtotal / freeShippingAt * 100) + '%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__row"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("strong", null, __ds_scope.formatMoney(subtotal))), discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__row"
  }, /*#__PURE__*/React.createElement("span", null, "Discount"), /*#__PURE__*/React.createElement("strong", null, "\u2212", __ds_scope.formatMoney(discount))), /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__row"
  }, /*#__PURE__*/React.createElement("span", null, "Shipping"), /*#__PURE__*/React.createElement("strong", null, ship === 0 ? 'Free' : __ds_scope.formatMoney(ship))), tax !== undefined && /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__row"
  }, /*#__PURE__*/React.createElement("span", null, "Estimated tax"), /*#__PURE__*/React.createElement("strong", null, __ds_scope.formatMoney(tax))), /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__total"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, __ds_scope.formatMoney(total))), children, /*#__PURE__*/React.createElement("div", {
    className: "fm-summary__note"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "rotate-ccw",
    size: 14
  }), "Free returns within 30 days"));
}
Object.assign(__ds_scope, { OrderSummary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/OrderSummary.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Rating.jsx
try { (() => {
function Rating({
  value = 0,
  count,
  size = 'md',
  showValue = true,
  className = ''
}) {
  const s = size === 'sm' ? 12 : 14;
  return /*#__PURE__*/React.createElement("span", {
    className: 'fm-rating' + (size === 'sm' ? ' fm-rating--sm' : '') + (className ? ' ' + className : ''),
    "aria-label": value + ' out of 5 stars'
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-rating__stars"
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: s,
    strokeWidth: 1.25,
    filled: true,
    className: i <= Math.round(value) ? '' : 'fm-rating__star--off'
  }))), showValue && /*#__PURE__*/React.createElement("span", null, value.toFixed(1)), count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "fm-rating__count"
  }, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  as = 'button',
  className,
  children,
  ...rest
}) {
  const Tag = as;
  const iconSize = size === 'sm' ? 16 : 18;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cx('fm-btn', 'fm-btn--' + variant, size !== 'md' && 'fm-btn--' + size, fullWidth && 'fm-btn--full', className)
  }, Tag === 'button' ? {
    type: rest.type || 'button'
  } : {}, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "fm-btn__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: iconSize
  })), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "fm-btn__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: iconSize
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  count,
  iconSize,
  filled,
  className,
  ...rest
}) {
  const s = iconSize || (size === 'sm' ? 16 : size === 'lg' ? 22 : 20);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: cx('fm-iconbtn', 'fm-iconbtn--' + variant, size !== 'md' && 'fm-iconbtn--' + size, className)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s,
    filled: filled
  }), count > 0 && /*#__PURE__*/React.createElement("span", {
    className: "fm-iconbtn__count"
  }, count));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/WishlistButton.jsx
try { (() => {
function WishlistButton({
  active,
  defaultActive = false,
  onChange,
  variant = 'surface',
  size = 'sm',
  className = ''
}) {
  const [inner, setInner] = React.useState(defaultActive);
  const on = active !== undefined ? active : inner;
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    filled: on,
    variant: variant,
    size: size,
    label: on ? 'Remove from wishlist' : 'Save to wishlist',
    className: (on ? 'fm-wish--on ' : '') + className,
    "aria-pressed": on,
    onClick: e => {
      e.stopPropagation();
      if (active === undefined) setInner(!on);
      onChange && onChange(!on);
    }
  });
}
Object.assign(__ds_scope, { WishlistButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/WishlistButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Media.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
const DARK = ['slate', 'ash', 'terracotta', 'olive'];
function Media({
  src,
  alt = '',
  tone = 'ivory',
  label,
  ratio = '1 / 1',
  radius,
  className,
  style,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cx('fm-media', DARK.includes(tone) && 'fm-media--dark', className),
    style: {
      aspectRatio: ratio,
      background: 'var(--tone-' + tone + ')',
      borderRadius: radius,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  }) : label ? /*#__PURE__*/React.createElement("span", {
    className: "fm-media__ph"
  }, label) : /*#__PURE__*/React.createElement("span", {
    className: "fm-media__ph"
  }), children);
}
Object.assign(__ds_scope, { Media });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Media.jsx", error: String((e && e.message) || e) }); }

// components/commerce/BrandCard.jsx
try { (() => {
function BrandCard({
  name,
  location,
  category,
  tone = 'sand',
  image,
  imageLabel,
  products = [],
  following,
  onFollow,
  onClick,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: 'fm-brand ' + className,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: image,
    tone: tone,
    label: imageLabel,
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-brand__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-brand__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "fm-brand__name"
  }, name), /*#__PURE__*/React.createElement("p", {
    className: "fm-meta"
  }, [location, category].filter(Boolean).join(' · '))), onFollow && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: following ? 'primary' : 'secondary',
    onClick: e => {
      e.stopPropagation();
      onFollow(!following);
    }
  }, following ? 'Following' : 'Follow')), products.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "fm-brand__strip"
  }, products.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement(__ds_scope.Media, {
    key: i,
    src: p.image,
    tone: p.tone,
    ratio: "1 / 1"
  })))));
}
Object.assign(__ds_scope, { BrandCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/BrandCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CollectionCard.jsx
try { (() => {
function CollectionCard({
  title,
  eyebrow = 'Collection',
  description,
  count,
  image,
  tone = 'slate',
  imageLabel,
  ratio = '4 / 5',
  variant = 'overlay',
  onClick,
  className = ''
}) {
  if (variant === 'stacked') {
    return /*#__PURE__*/React.createElement("article", {
      className: 'fm-coll ' + className,
      onClick: onClick
    }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
      src: image,
      tone: tone,
      label: imageLabel,
      ratio: ratio
    }), /*#__PURE__*/React.createElement("div", {
      className: "fm-coll__info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fm-coll__info-text"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fm-label fm-muted"
    }, eyebrow, count ? ' · ' + count + ' pieces' : ''), /*#__PURE__*/React.createElement("h3", {
      className: "fm-h3"
    }, title), description && /*#__PURE__*/React.createElement("p", {
      className: "fm-body-sm fm-secondary"
    }, description)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
      icon: "arrow-up-right",
      label: 'Open ' + title,
      variant: "outline"
    })));
  }
  return /*#__PURE__*/React.createElement("article", {
    className: 'fm-coll ' + className,
    onClick: onClick
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: image,
    tone: tone,
    label: imageLabel,
    ratio: ratio
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-coll__overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-coll__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-coll__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "fm-h2"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "fm-body"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "fm-coll__bottom"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-coll__count"
  }, count ? count + ' pieces' : ''), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-up-right",
    label: 'Open ' + title,
    variant: "surface",
    className: "fm-coll__arrow"
  }))));
}
Object.assign(__ds_scope, { CollectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CollectionCard.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductGallery.jsx
try { (() => {
function ProductGallery({
  images = [],
  ratio = '4 / 5',
  className = ''
}) {
  const [idx, setIdx] = React.useState(0);
  const track = React.useRef(null);
  const go = i => {
    const n = Math.max(0, Math.min(images.length - 1, i));
    setIdx(n);
    const t = track.current;
    if (t) t.scrollTo({
      left: n * t.clientWidth,
      behavior: 'smooth'
    });
  };
  const onScroll = () => {
    const t = track.current;
    if (t && t.clientWidth) {
      const n = Math.round(t.scrollLeft / t.clientWidth);
      if (n !== idx) setIdx(n);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-gallery ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-gallery__thumbs"
  }, images.map((im, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "fm-gallery__thumb",
    "aria-current": i === idx,
    "aria-label": 'View image ' + (i + 1),
    onClick: () => go(i)
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: im.src,
    tone: im.tone,
    ratio: "4 / 5"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fm-gallery__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-gallery__track",
    ref: track,
    onScroll: onScroll
  }, images.map((im, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fm-gallery__slide"
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: im.src,
    alt: im.alt,
    tone: im.tone,
    label: im.label,
    ratio: ratio
  })))), /*#__PURE__*/React.createElement("span", {
    className: "fm-gallery__count"
  }, idx + 1, " / ", images.length), /*#__PURE__*/React.createElement("div", {
    className: "fm-gallery__nav"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    label: "Previous image",
    variant: "surface",
    disabled: idx === 0,
    onClick: () => go(idx - 1)
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    label: "Next image",
    variant: "surface",
    disabled: idx === images.length - 1,
    onClick: () => go(idx + 1)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-gallery__dots",
    "aria-hidden": "true"
  }, images.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "data-on": i === idx
  })))));
}
Object.assign(__ds_scope, { ProductGallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductGallery.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  size = 'h2',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-sechead ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-sechead__text"
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-sechead__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: size === 'h1' ? 'fm-h1' : size === 'h3' ? 'fm-h3' : 'fm-h2'
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "fm-body fm-sechead__desc"
  }, description)), action && /*#__PURE__*/React.createElement("div", {
    className: "fm-sechead__action"
  }, action));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Tag({
  variant = 'neutral',
  size = 'md',
  dot = false,
  onRemove,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cx('fm-tag', 'fm-tag--' + variant, size !== 'md' && 'fm-tag--' + size, className)
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fm-tag__dot"
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-tag__remove",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function ProductCard({
  product = {},
  wishlisted,
  onWishlist,
  onClick,
  onQuickAdd,
  ratio = '4 / 5',
  size = 'md',
  showSwatches = true,
  className = ''
}) {
  const p = product;
  return /*#__PURE__*/React.createElement("article", {
    className: 'fm-pcard' + (size !== 'md' ? ' fm-pcard--' + size : '') + (className ? ' ' + className : ''),
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__media"
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: p.image,
    alt: p.name,
    tone: p.tone || 'ivory',
    label: p.image ? undefined : p.imageLabel,
    ratio: ratio
  }), p.badge && /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    size: "sm",
    variant: p.badge === 'Sale' ? 'error' : p.badge === 'New' ? 'inverse' : 'neutral'
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__wish"
  }, /*#__PURE__*/React.createElement(__ds_scope.WishlistButton, {
    active: wishlisted,
    onChange: v => onWishlist && onWishlist(p, v)
  })), onQuickAdd && /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__quick"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    iconLeft: "plus",
    onClick: e => {
      e.stopPropagation();
      onQuickAdd(p);
    }
  }, "Quick add"))), /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-pcard__brand"
  }, p.brand), /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__row"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fm-pcard__name"
  }, p.name), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: p.price,
    compareAt: p.compareAt
  })), showSwatches && p.colors && p.colors.length > 1 && /*#__PURE__*/React.createElement("div", {
    className: "fm-pcard__swatches"
  }, p.colors.slice(0, 4).map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      background: c
    }
  })))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 24,
  color,
  onClick,
  href,
  className = '',
  style
}) {
  const s = {
    fontSize: size,
    color,
    ...style
  };
  if (href || onClick) return /*#__PURE__*/React.createElement("a", {
    href: href || '#',
    onClick: e => {
      if (onClick) {
        e.preventDefault();
        onClick(e);
      }
    },
    className: 'fm-wordmark ' + className,
    style: s,
    "aria-label": "FORME home"
  }, "FORME");
  return /*#__PURE__*/React.createElement("span", {
    className: 'fm-wordmark ' + className,
    style: s
  }, "FORME");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Drawer.jsx
try { (() => {
function Drawer({
  open,
  onClose,
  side = 'right',
  title,
  count,
  footer,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-drawer fm-drawer--' + side,
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-drawer__scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: "fm-drawer__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-drawer__title"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fm-h3"
  }, title), count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-muted"
  }, count)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-drawer__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "fm-drawer__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  title,
  description,
  size = 'md',
  footer,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fm-modal",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-modal__scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: 'fm-modal__panel' + (size !== 'md' ? ' fm-modal__panel--' + size : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-modal__head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "fm-h3"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "fm-body-sm fm-secondary"
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    variant: "ghost",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "fm-modal__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const ICONS = {
  default: null,
  success: 'check',
  error: 'circle-alert',
  cart: 'shopping-bag',
  wishlist: 'heart'
};
function Toast({
  message,
  variant = 'default',
  tone = 'dark',
  icon,
  action,
  onAction,
  onClose,
  duration = 0,
  className = ''
}) {
  const closeRef = React.useRef(onClose);
  closeRef.current = onClose;
  React.useEffect(() => {
    if (duration) {
      const t = setTimeout(() => closeRef.current && closeRef.current(), duration);
      return () => clearTimeout(t);
    }
  }, [duration]);
  const ic = icon || ICONS[variant];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    className: 'fm-toast fm-toast--' + variant + (tone === 'light' ? ' fm-toast--light' : '') + (className ? ' ' + className : '')
  }, ic && /*#__PURE__*/React.createElement("span", {
    className: "fm-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 18,
    filled: ic === 'heart'
  })), /*#__PURE__*/React.createElement("span", {
    className: "fm-toast__msg"
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-toast__action",
    onClick: onAction
  }, action), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    className: "fm-toast__close",
    onClick: onClose
  }));
}
function ToastRegion({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fm-toasts",
    "aria-live": "polite"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  count,
  disabled,
  className = ''
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    className: 'fm-check ' + (disabled ? 'fm-check--disabled ' : '') + className
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (checked === undefined) setInner(e.target.checked);
      onChange && onChange(e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fm-check__box"
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 2.25
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "fm-check__label"
  }, label), count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "fm-check__count"
  }, count));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropdown.jsx
try { (() => {
function Dropdown({
  options = [],
  value,
  onChange,
  prefix,
  placeholder = 'Select',
  align = 'left',
  className = '',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const esc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, [open]);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const cur = opts.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: 'fm-dd ' + (open ? 'fm-dd--open ' : '') + className,
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-dd__trigger",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: "fm-dd__prefix"
  }, prefix), /*#__PURE__*/React.createElement("span", null, cur ? cur.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    className: "fm-dd__chev"
  })), open && /*#__PURE__*/React.createElement("ul", {
    className: 'fm-dd__menu fm-dd__menu--' + align,
    role: "listbox"
  }, opts.map(o => /*#__PURE__*/React.createElement("li", {
    key: o.value
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "option",
    "aria-selected": o.value === value,
    className: "fm-dd__opt",
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    }
  }, o.label, o.value === value && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16
  }))))));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropdown.jsx", error: String((e && e.message) || e) }); }

// components/filters/SortControl.jsx
try { (() => {
const SORT_OPTIONS = [{
  value: 'featured',
  label: 'Featured'
}, {
  value: 'new',
  label: 'Newest'
}, {
  value: 'price-asc',
  label: 'Price, low to high'
}, {
  value: 'price-desc',
  label: 'Price, high to low'
}, {
  value: 'rating',
  label: 'Top rated'
}];
function SortControl({
  value = 'featured',
  onChange,
  options = SORT_OPTIONS,
  resultCount,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-sort ' + className
  }, resultCount !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "fm-meta"
  }, resultCount, " products"), /*#__PURE__*/React.createElement(__ds_scope.Dropdown, {
    prefix: "Sort",
    options: options,
    value: value,
    onChange: onChange,
    align: "right"
  }));
}
Object.assign(__ds_scope, { SORT_OPTIONS, SortControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/SortControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const cx = (...a) => a.filter(Boolean).join(' ');
function Input({
  label,
  hint,
  error,
  icon,
  trailing,
  size = 'md',
  variant = 'default',
  disabled,
  id,
  className,
  style,
  ...rest
}) {
  const fid = id || (label ? 'fm-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: cx('fm-field', className),
    style: style
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fm-field__label",
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    className: cx('fm-input', size !== 'md' && 'fm-input--' + size, variant === 'sunken' && 'fm-input--sunken', error && 'fm-input--error', disabled && 'fm-input--disabled')
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": !!error
  }, rest)), trailing), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: cx('fm-field__hint', error && 'fm-field__hint--error')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/filters/PriceRange.jsx
try { (() => {
function PriceRange({
  min = 0,
  max = 1000,
  step = 10,
  value,
  onChange,
  className = ''
}) {
  const [lo, hi] = value || [min, max];
  const set = (a, b) => onChange && onChange([Math.min(a, b), Math.max(a, b)]);
  const pct = v => (v - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-range ' + className
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-range__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-range__rail"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-range__fill",
    style: {
      left: pct(lo) + '%',
      right: 100 - pct(hi) + '%'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: lo,
    "aria-label": "Minimum price",
    onChange: e => set(+e.target.value, hi)
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: hi,
    "aria-label": "Maximum price",
    onChange: e => set(lo, +e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-range__inputs"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    size: "sm",
    icon: "dollar-sign",
    value: String(lo),
    onChange: e => set(+e.target.value || min, hi),
    "aria-label": "Min"
  }), /*#__PURE__*/React.createElement("span", null, "\u2013"), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    size: "sm",
    icon: "dollar-sign",
    value: String(hi),
    onChange: e => set(lo, +e.target.value || max),
    "aria-label": "Max"
  })));
}
Object.assign(__ds_scope, { PriceRange });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/PriceRange.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityControl.jsx
try { (() => {
function QuantityControl({
  value = 1,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  className = ''
}) {
  const sz = size === 'sm' ? 14 : 16;
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-qty ' + (size === 'sm' ? 'fm-qty--sm ' : '') + className,
    role: "group",
    "aria-label": "Quantity"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-qty__btn",
    "aria-label": "Decrease",
    disabled: value <= min,
    onClick: () => onChange && onChange(value - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: sz
  })), /*#__PURE__*/React.createElement("span", {
    className: "fm-qty__val",
    "aria-live": "polite"
  }, value), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-qty__btn",
    "aria-label": "Increase",
    disabled: value >= max,
    onClick: () => onChange && onChange(value + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: sz
  })));
}
Object.assign(__ds_scope, { QuantityControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityControl.jsx", error: String((e && e.message) || e) }); }

// components/commerce/CartItem.jsx
try { (() => {
function CartItem({
  item = {},
  onQuantity,
  onRemove,
  compact = false,
  className = ''
}) {
  const it = item;
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-citem' + (compact ? ' fm-citem--compact' : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement(__ds_scope.Media, {
    src: it.image,
    tone: it.tone,
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-citem__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-citem__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-citem__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-muted"
  }, it.brand), /*#__PURE__*/React.createElement("span", {
    className: "fm-citem__name"
  }, it.name), it.variant && /*#__PURE__*/React.createElement("span", {
    className: "fm-citem__variant"
  }, it.variant)), /*#__PURE__*/React.createElement(__ds_scope.Price, {
    amount: it.price * (it.qty || 1),
    compareAt: it.compareAt ? it.compareAt * (it.qty || 1) : undefined,
    size: compact ? 'sm' : 'md'
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-citem__bottom"
  }, /*#__PURE__*/React.createElement(__ds_scope.QuantityControl, {
    size: "sm",
    value: it.qty || 1,
    onChange: q => onQuantity && onQuantity(it, q)
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-citem__remove",
    onClick: () => onRemove && onRemove(it)
  }, "Remove"))));
}
Object.assign(__ds_scope, { CartItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/CartItem.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
const cx = (...a) => a.filter(Boolean).join(' ');
function SearchBar({
  value,
  defaultValue = '',
  onChange,
  onSubmit,
  onFocus,
  placeholder = 'Search furniture, lighting, objects…',
  size = 'md',
  autoFocus,
  className,
  style
}) {
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  const set = x => {
    if (value === undefined) setInner(x);
    onChange && onChange(x);
  };
  const submit = e => {
    e.preventDefault();
    onSubmit && onSubmit(v);
  };
  const compact = size === 'compact';
  return /*#__PURE__*/React.createElement("form", {
    role: "search",
    onSubmit: submit,
    className: cx('fm-search', size !== 'md' && 'fm-search--' + size, className),
    style: style
  }, compact && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 18
  }), /*#__PURE__*/React.createElement("input", {
    type: "search",
    value: v,
    placeholder: placeholder,
    autoFocus: autoFocus,
    onFocus: onFocus,
    onChange: e => set(e.target.value),
    "aria-label": "Search FORME"
  }), v && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Clear search",
    size: "sm",
    className: "fm-search__clear",
    onClick: () => set('')
  }), !compact && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    label: "Search",
    variant: "accent",
    className: "fm-search__submit",
    type: "submit",
    onClick: submit,
    iconSize: size === 'lg' ? 22 : 20
  }));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/VariantPicker.jsx
try { (() => {
function VariantPicker({
  label,
  type = 'option',
  options = [],
  value,
  onChange,
  size = 'md',
  className = ''
}) {
  const cur = options.find(o => o.value === value);
  return /*#__PURE__*/React.createElement("div", {
    className: 'fm-variant ' + className
  }, label && /*#__PURE__*/React.createElement("div", {
    className: "fm-variant__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-variant__name"
  }, label), /*#__PURE__*/React.createElement("span", null, cur ? cur.label : '')), /*#__PURE__*/React.createElement("div", {
    className: "fm-variant__opts",
    role: "group",
    "aria-label": label
  }, options.map(o => type === 'swatch' ? /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    className: 'fm-swatch' + (size === 'sm' ? ' fm-swatch--sm' : ''),
    "aria-pressed": o.value === value,
    "aria-label": o.label,
    title: o.label,
    disabled: o.disabled,
    onClick: () => onChange && onChange(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: o.color
    }
  })) : /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    className: "fm-optpill",
    "aria-pressed": o.value === value,
    disabled: o.disabled,
    onClick: () => onChange && onChange(o.value)
  }, o.label))));
}
Object.assign(__ds_scope, { VariantPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/VariantPicker.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  className = ''
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: className
  }, /*#__PURE__*/React.createElement("ol", {
    className: "fm-crumbs"
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "fm-crumbs__item"
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "fm-crumbs__current",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "fm-crumbs__link",
      onClick: it.onClick
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "fm-crumbs__sep",
      "aria-hidden": "true"
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryPill.jsx
try { (() => {
function CategoryPill({
  label,
  tone,
  count,
  active = false,
  size = 'md',
  onClick,
  className = ''
}) {
  const cls = 'fm-catpill' + (size === 'sm' ? ' fm-catpill--sm' : '') + (!tone || size === 'sm' ? ' fm-catpill--plain' : '') + (className ? ' ' + className : '');
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: cls,
    "aria-pressed": active,
    onClick: onClick
  }, tone && size !== 'sm' && /*#__PURE__*/React.createElement("span", {
    className: "fm-catpill__thumb",
    style: {
      background: 'var(--tone-' + tone + ')'
    }
  }), /*#__PURE__*/React.createElement("span", null, label), count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "fm-catpill__count"
  }, count));
}
Object.assign(__ds_scope, { CategoryPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryPill.jsx", error: String((e && e.message) || e) }); }

// components/filters/FilterGroup.jsx
try { (() => {
function FilterGroup({
  title,
  type = 'checkbox',
  options = [],
  value = [],
  onChange,
  defaultOpen = true,
  limit = 6,
  children,
  className = ''
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [all, setAll] = React.useState(false);
  const toggle = v => onChange && onChange(value.includes(v) ? value.filter(x => x !== v) : value.concat(v));
  const shown = all ? options : options.slice(0, limit);
  return /*#__PURE__*/React.createElement("section", {
    className: 'fm-fgroup' + (open ? ' fm-fgroup--open' : '') + (className ? ' ' + className : '')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-fgroup__head",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null, title, value.length > 0 && /*#__PURE__*/React.createElement("span", {
    className: "fm-fgroup__sel"
  }, value.length, " selected")), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    className: "fm-fgroup__chev"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "fm-fgroup__body"
  }, children, type === 'checkbox' && /*#__PURE__*/React.createElement("div", {
    className: "fm-fgroup__list"
  }, shown.map(o => /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    key: o.value,
    label: o.label,
    count: o.count,
    checked: value.includes(o.value),
    onChange: () => toggle(o.value)
  }))), type === 'pills' && /*#__PURE__*/React.createElement("div", {
    className: "fm-fgroup__pills"
  }, shown.map(o => /*#__PURE__*/React.createElement(__ds_scope.CategoryPill, {
    key: o.value,
    size: "sm",
    label: o.label,
    active: value.includes(o.value),
    onClick: () => toggle(o.value)
  }))), type === 'swatch' && /*#__PURE__*/React.createElement("div", {
    className: "fm-fgroup__swatches"
  }, shown.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    className: "fm-fgroup__sw",
    "aria-pressed": value.includes(o.value),
    onClick: () => toggle(o.value)
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-swatch",
    "aria-pressed": value.includes(o.value),
    style: {
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: o.color
    }
  })), o.label))), !children && options.length > limit && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-fgroup__more",
    onClick: () => setAll(!all)
  }, all ? 'Show less' : 'Show all ' + options.length)));
}
Object.assign(__ds_scope, { FilterGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/filters/FilterGroup.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const COLS = [{
  title: 'Shop',
  links: ['Furniture', 'Lighting', 'Home Decor', 'Kitchen & Dining', 'Workspace', 'Objects & Gifts']
}, {
  title: 'FORME',
  links: ['About', 'Journal', 'Brands', 'Sell on FORME', 'Careers']
}, {
  title: 'Help',
  links: ['Shipping', 'Returns', 'Order status', 'Care guides', 'Contact']
}];
function Footer({
  columns = COLS,
  onLink,
  intro = 'A curated marketplace for modern living. Independent brands and emerging designers, chosen with care.'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "fm-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-footer__intro"
  }, /*#__PURE__*/React.createElement("p", {
    className: "fm-body"
  }, intro)), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    className: "fm-footer__col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-footer__title"
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    type: "button",
    className: "fm-footer__link",
    onClick: () => onLink && onLink(l)
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "fm-footer__mark",
    "aria-hidden": "true"
  }, "FORME"), /*#__PURE__*/React.createElement("div", {
    className: "fm-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 FORME. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "fm-footer__legal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Cookies"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "United States \xB7 USD")))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
const DEFAULT_LINKS = [{
  id: 'new',
  label: 'New'
}, {
  id: 'furniture',
  label: 'Furniture'
}, {
  id: 'lighting',
  label: 'Lighting'
}, {
  id: 'decor',
  label: 'Home Decor'
}, {
  id: 'kitchen',
  label: 'Kitchen & Dining'
}, {
  id: 'workspace',
  label: 'Workspace'
}, {
  id: 'lifestyle',
  label: 'Lifestyle'
}, {
  id: 'tech',
  label: 'Tech Accessories'
}, {
  id: 'gifts',
  label: 'Objects & Gifts'
}];
function Header({
  links = DEFAULT_LINKS,
  secondaryLinks = [{
    id: 'brands',
    label: 'Brands'
  }, {
    id: 'journal',
    label: 'Journal'
  }],
  active,
  onNavigate,
  onHome,
  onSearch,
  onSearchFocus,
  onCart,
  onWishlist,
  onAccount,
  cartCount = 0,
  wishlistCount = 0,
  bordered = true,
  showNav = true
}) {
  const [menu, setMenu] = React.useState(false);
  const go = id => {
    setMenu(false);
    onNavigate && onNavigate(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: 'fm-header' + (bordered ? ' fm-header--bordered' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-header__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-header__left"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "menu",
    label: "Menu",
    className: "fm-header__menu",
    onClick: () => setMenu(true)
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-header__brand fm-hide-m"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 24,
    onClick: onHome
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fm-header__brand fm-show-m"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 21,
    onClick: onHome
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-header__search"
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchBar, {
    size: "compact",
    placeholder: "Search products, brands and designers",
    onSubmit: onSearch,
    onFocus: onSearchFocus
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-header__right"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search",
    className: "fm-header__msearch",
    onClick: onSearchFocus
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "user-round",
    label: "Account",
    className: "fm-header__acct",
    onClick: onAccount
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "heart",
    label: "Wishlist",
    className: "fm-header__wish",
    count: wishlistCount,
    onClick: onWishlist
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "shopping-bag",
    label: "Cart",
    count: cartCount,
    onClick: onCart
  }))), showNav && /*#__PURE__*/React.createElement("nav", {
    className: "fm-header__nav",
    "aria-label": "Categories"
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    type: "button",
    className: "fm-navlink",
    "aria-current": active === l.id ? 'page' : undefined,
    onClick: () => go(l.id)
  }, l.label)), secondaryLinks.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    type: "button",
    className: 'fm-navlink' + (i === 0 ? ' fm-navlink--end' : ''),
    "aria-current": active === l.id ? 'page' : undefined,
    onClick: () => go(l.id)
  }, l.label)))), menu && /*#__PURE__*/React.createElement("div", {
    className: "fm-sheet",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-sheet__scrim",
    onClick: () => setMenu(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-sheet__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-sheet__head"
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 21
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close menu",
    onClick: () => setMenu(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-sheet__links"
  }, links.concat(secondaryLinks).map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    type: "button",
    className: "fm-sheet__link",
    onClick: () => go(l.id)
  }, l.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 18
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-btn fm-btn--secondary fm-btn--full",
    onClick: () => {
      setMenu(false);
      onAccount && onAccount();
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-btn fm-btn--ghost fm-btn--full",
    onClick: () => {
      setMenu(false);
      onWishlist && onWishlist();
    }
  }, "Wishlist", wishlistCount ? ' · ' + wishlistCount : '')))));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function pages(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  const s = new Set([1, total, page, page - 1, page + 1]);
  const arr = [...s].filter(p => p >= 1 && p <= total).sort((a, b) => a - b);
  const out = [];
  arr.forEach((p, i) => {
    if (i && p - arr[i - 1] > 1) out.push('…' + i);
    out.push(p);
  });
  return out;
}
function Pagination({
  page = 1,
  total = 1,
  onChange,
  className = ''
}) {
  const go = p => onChange && p >= 1 && p <= total && onChange(p);
  return /*#__PURE__*/React.createElement("nav", {
    className: 'fm-pager ' + className,
    "aria-label": "Pagination"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-left",
    label: "Previous page",
    variant: "outline",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-pager__pages"
  }, pages(page, total).map(p => typeof p === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: p,
    className: "fm-pager__gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    className: "fm-pager__num",
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p))), /*#__PURE__*/React.createElement("span", {
    className: "fm-pager__compact"
  }, "Page ", page, " of ", total), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "arrow-right",
    label: "Next page",
    variant: "outline",
    disabled: page >= total,
    onClick: () => go(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/App.jsx
try { (() => {
const {
  Header,
  Footer,
  Toast,
  ToastRegion
} = window.FORMEDesignSystem_c41e46;
function App({
  forceMobile = false
}) {
  const ROUTE_KEY = forceMobile ? 'forme-kit-route-m' : 'forme-kit-route';
  const D = window.FM_DATA;
  const [route, setRoute] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(ROUTE_KEY)) || {
        name: 'home'
      };
    } catch (e) {
      return {
        name: 'home'
      };
    }
  });
  const [cart, setCart] = React.useState([{
    key: 'halo-1',
    ...D.byId.halo,
    qty: 1,
    variant: 'Travertine · Medium'
  }, {
    key: 'carafe-1',
    ...D.byId.carafe,
    qty: 2,
    variant: 'Sage glaze'
  }]);
  const [wish, setWish] = React.useState(new Set(['lounge']));
  const [follows, setFollows] = React.useState(new Set());
  const [drawer, setDrawer] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  const scroller = React.useRef(null);
  React.useEffect(() => {
    localStorage.setItem(ROUTE_KEY, JSON.stringify(route));
  }, [route]);
  const toast = t => {
    const id = Math.random().toString(36).slice(2);
    setToasts(x => [...x.slice(-1), {
      id,
      ...t
    }]);
  };
  const dismiss = id => setToasts(x => x.filter(t => t.id !== id));
  const nav = {
    cart,
    wish,
    follows,
    toast,
    go: r => {
      setRoute(r);
      if (scroller.current) scroller.current.scrollTop = 0;
    },
    scrollTop: () => {
      if (scroller.current) scroller.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    scrollTo: id => {
      const el = document.getElementById(id);
      if (el && scroller.current) scroller.current.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    },
    addToCart: (p, qty = 1, variant) => {
      const v = variant || (p.colors ? 'Default finish' : undefined);
      const key = p.id + '|' + v;
      setCart(c => c.find(l => l.key === key) ? c.map(l => l.key === key ? {
        ...l,
        qty: l.qty + qty
      } : l) : [...c, {
        key,
        ...p,
        qty,
        variant: v
      }]);
      toast({
        message: 'Added ' + p.name,
        variant: 'cart',
        action: 'View cart',
        onAction: () => setDrawer(true)
      });
    },
    setQty: (l, q) => setCart(c => c.map(x => x.key === l.key ? {
      ...x,
      qty: q
    } : x)),
    removeLine: l => {
      setCart(c => c.filter(x => x.key !== l.key));
      toast({
        message: 'Removed ' + l.name,
        action: 'Undo',
        onAction: () => setCart(c => [...c, l])
      });
    },
    toggleWish: p => setWish(w => {
      const n = new Set(w);
      if (n.has(p.id)) n.delete(p.id);else {
        n.add(p.id);
        toast({
          message: 'Saved to wishlist',
          variant: 'wishlist'
        });
      }
      return n;
    }),
    toggleFollow: b => setFollows(f => {
      const n = new Set(f);
      n.has(b.id) ? n.delete(b.id) : n.add(b.id);
      return n;
    })
  };
  const count = cart.reduce((s, l) => s + l.qty, 0);
  let screen;
  if (route.name === 'category') screen = /*#__PURE__*/React.createElement(Category, {
    nav: nav,
    id: route.id
  });else if (route.name === 'product') screen = /*#__PURE__*/React.createElement(Product, {
    nav: nav,
    id: route.id
  });else if (route.name === 'search') screen = /*#__PURE__*/React.createElement(Search, {
    nav: nav,
    q: route.q || ''
  });else if (route.name === 'cart') screen = /*#__PURE__*/React.createElement(CartPage, {
    nav: nav
  });else screen = /*#__PURE__*/React.createElement(Home, {
    nav: nav
  });
  const active = route.name === 'category' ? route.id : route.name === 'product' ? (D.byId[route.id] || {}).cat : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "fm-app k-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-scroll",
    ref: scroller
  }, /*#__PURE__*/React.createElement(Header, {
    active: active,
    cartCount: count,
    wishlistCount: wish.size,
    onHome: () => nav.go({
      name: 'home'
    }),
    onNavigate: id => nav.go(D.catById[id] ? {
      name: 'category',
      id
    } : id === 'new' ? {
      name: 'category',
      id: 'lighting'
    } : {
      name: 'home'
    }),
    onSearch: q => nav.go({
      name: 'search',
      q
    }),
    onSearchFocus: () => route.name !== 'search' && nav.go({
      name: 'search'
    }),
    onCart: () => setDrawer(true),
    onWishlist: () => toast({
      message: wish.size + ' pieces saved to your wishlist',
      variant: 'wishlist'
    }),
    onAccount: () => toast({
      message: 'Accounts are not part of this prototype.'
    })
  }), screen, /*#__PURE__*/React.createElement(Footer, {
    onLink: l => {
      const c = D.CATS.find(x => x.label === l);
      if (c) nav.go({
        name: 'category',
        id: c.id
      });
    }
  })), /*#__PURE__*/React.createElement(CartDrawer, {
    nav: nav,
    open: drawer,
    onClose: () => setDrawer(false)
  }), /*#__PURE__*/React.createElement(ToastRegion, null, toasts.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    message: t.message,
    variant: t.variant,
    action: t.action,
    onAction: () => {
      t.onAction && t.onAction();
      dismiss(t.id);
    },
    onClose: () => dismiss(t.id),
    duration: 3600
  }))));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Cart.jsx
try { (() => {
const {
  Drawer,
  CartItem,
  OrderSummary,
  Button,
  Input,
  Breadcrumbs
} = window.FORMEDesignSystem_c41e46;
const subtotalOf = lines => lines.reduce((s, l) => s + l.price * l.qty, 0);
function CartDrawer({
  nav,
  open,
  onClose
}) {
  const lines = nav.cart;
  const n = lines.reduce((s, l) => s + l.qty, 0);
  return /*#__PURE__*/React.createElement(Drawer, {
    open: open,
    onClose: onClose,
    title: "Cart",
    count: n + (n === 1 ? ' item' : ' items'),
    footer: lines.length ? /*#__PURE__*/React.createElement(OrderSummary, {
      subtotal: subtotalOf(lines)
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-stack",
      style: {
        gap: 8,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true,
      onClick: () => nav.toast({
        message: 'Checkout is not part of this prototype.'
      })
    }, "Checkout"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      fullWidth: true,
      onClick: () => {
        onClose();
        nav.go({
          name: 'cart'
        });
      }
    }, "View cart"))) : null
  }, lines.length ? lines.map(l => /*#__PURE__*/React.createElement(CartItem, {
    key: l.key,
    item: l,
    compact: true,
    onQuantity: nav.setQty,
    onRemove: nav.removeLine
  })) : /*#__PURE__*/React.createElement("div", {
    className: "k-empty"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fm-h3"
  }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
    className: "fm-body-sm fm-secondary"
  }, "Start with something worth having."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => {
      onClose();
      nav.go({
        name: 'home'
      });
    }
  }, "Explore products")));
}
function CartPage({
  nav
}) {
  const D = window.FM_DATA;
  const lines = nav.cart;
  const [code, setCode] = React.useState('');
  const [discount, setDiscount] = React.useState(0);
  const sub = subtotalOf(lines);
  const n = lines.reduce((s, l) => s + l.qty, 0);
  return /*#__PURE__*/React.createElement("main", {
    className: "fm-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0 32px'
    },
    className: "k-stack"
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Home',
      onClick: () => nav.go({
        name: 'home'
      })
    }, {
      label: 'Cart'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-row",
    style: {
      alignItems: 'baseline',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fm-h1"
  }, "Your cart"), /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-muted"
  }, n, " ", n === 1 ? 'item' : 'items'))), lines.length ? /*#__PURE__*/React.createElement("div", {
    className: "k-cart"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border)'
    }
  }, lines.map(l => /*#__PURE__*/React.createElement(CartItem, {
    key: l.key,
    item: l,
    onQuantity: nav.setQty,
    onRemove: nav.removeLine
  }))), /*#__PURE__*/React.createElement("aside", {
    className: "k-cart__summary"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fm-h3"
  }, "Summary"), /*#__PURE__*/React.createElement(OrderSummary, {
    subtotal: sub,
    discount: discount,
    tax: Math.round(sub * 0.0875)
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: () => nav.toast({
      message: 'Checkout is not part of this prototype.'
    })
  }, "Checkout")), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    placeholder: "Promo code",
    value: code,
    onChange: e => setCode(e.target.value),
    trailing: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "sm",
      onClick: () => {
        if (code.trim()) {
          setDiscount(Math.round(sub * 0.1));
          nav.toast({
            message: 'Code applied — 10% off',
            variant: 'success'
          });
        }
      }
    }, "Apply")
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "k-empty"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fm-h2"
  }, "Your cart is empty"), /*#__PURE__*/React.createElement("p", {
    className: "fm-body fm-secondary"
  }, "Start with something worth having."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => nav.go({
      name: 'home'
    })
  }, "Explore products")), /*#__PURE__*/React.createElement(ProductRail, {
    items: D.PRODUCTS.slice(12, 20),
    nav: nav,
    title: "You may also like",
    eyebrow: "Recommended"
  }));
}
Object.assign(window, {
  CartDrawer,
  CartPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Category.jsx
try { (() => {
const {
  Button,
  Media,
  Breadcrumbs,
  CategoryPill,
  FilterGroup,
  PriceRange,
  SortControl,
  Pagination,
  Tag,
  Drawer,
  ProductCard: PCard
} = window.FORMEDesignSystem_c41e46;
const COLORS = [{
  value: 'ivory',
  label: 'Ivory',
  color: '#eee8de'
}, {
  value: 'sand',
  label: 'Sand',
  color: '#e2d5c1'
}, {
  value: 'clay',
  label: 'Clay',
  color: '#cfae93'
}, {
  value: 'sage',
  label: 'Sage',
  color: '#b9bea9'
}, {
  value: 'mist',
  label: 'Mist',
  color: '#dde0dc'
}, {
  value: 'black',
  label: 'Black',
  color: '#161413'
}];
const MATERIALS = [{
  value: 'oak',
  label: 'Oak',
  count: 42
}, {
  value: 'travertine',
  label: 'Travertine',
  count: 18
}, {
  value: 'glass',
  label: 'Glass',
  count: 31
}, {
  value: 'steel',
  label: 'Brushed steel',
  count: 24
}, {
  value: 'linen',
  label: 'Linen',
  count: 15
}, {
  value: 'ceramic',
  label: 'Ceramic',
  count: 22
}, {
  value: 'brass',
  label: 'Brass',
  count: 11
}, {
  value: 'paper',
  label: 'Paper',
  count: 6
}];
function sortList(list, sort) {
  const l = list.slice();
  if (sort === 'price-asc') l.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') l.sort((a, b) => b.price - a.price);
  if (sort === 'rating') l.sort((a, b) => b.rating - a.rating);
  if (sort === 'new') l.sort((a, b) => (b.badge === 'New') - (a.badge === 'New'));
  return l;
}
function Filters({
  f,
  setF,
  brands
}) {
  const set = k => v => setF({
    ...f,
    [k]: v
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Category",
    type: "checkbox",
    value: f.sub,
    onChange: set('sub'),
    options: f.subs.slice(1).map((s, i) => ({
      value: s,
      label: s,
      count: 40 + i * 13
    }))
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Brand",
    value: f.brand,
    onChange: set('brand'),
    options: brands
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Price",
    type: "custom"
  }, /*#__PURE__*/React.createElement(PriceRange, {
    min: 0,
    max: 2500,
    step: 10,
    value: f.price,
    onChange: set('price')
  })), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Color",
    type: "swatch",
    value: f.color,
    onChange: set('color'),
    options: COLORS
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Material",
    value: f.material,
    onChange: set('material'),
    options: MATERIALS,
    limit: 5,
    defaultOpen: false
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Availability",
    type: "pills",
    value: f.avail,
    onChange: set('avail'),
    options: [{
      value: 'ready',
      label: 'Ready to ship'
    }, {
      value: 'made',
      label: 'Made to order'
    }, {
      value: 'sale',
      label: 'On sale'
    }],
    defaultOpen: false
  }), /*#__PURE__*/React.createElement(FilterGroup, {
    title: "Rating",
    value: f.rating,
    onChange: set('rating'),
    options: [{
      value: '4.5',
      label: '4.5 and up'
    }, {
      value: '4',
      label: '4.0 and up'
    }],
    defaultOpen: false
  }));
}
function Category({
  nav,
  id
}) {
  const D = window.FM_DATA;
  const cat = D.catById[id] || D.CATS[1];
  const base = D.PRODUCTS.filter(p => p.cat === cat.id);
  const pool = base.length >= 9 ? base : base.concat(D.PRODUCTS.filter(p => p.cat !== cat.id));
  const brands = [...new Set(pool.map(p => p.brand))].map(b => ({
    value: b,
    label: b,
    count: pool.filter(p => p.brand === b).length * 7
  }));
  const init = {
    sub: [],
    brand: [],
    price: [0, 2500],
    color: [],
    material: [],
    avail: [],
    rating: [],
    subs: cat.subs
  };
  const [f, setF] = React.useState(init);
  const [sub, setSub] = React.useState('All');
  const [sort, setSort] = React.useState('featured');
  const [page, setPage] = React.useState(1);
  const [sheet, setSheet] = React.useState(false);
  React.useEffect(() => {
    setF(init);
    setSub('All');
    setPage(1);
  }, [cat.id]);
  let list = pool.filter(p => (!f.brand.length || f.brand.includes(p.brand)) && p.price >= f.price[0] && p.price <= f.price[1]);
  if (f.avail.includes('sale')) list = list.filter(p => p.compareAt);
  list = sortList(list, sort).slice(0, 12);
  const active = [...f.brand.map(v => ['brand', v]), ...f.color.map(v => ['color', v]), ...f.material.map(v => ['material', v]), ...f.sub.map(v => ['sub', v])];
  const count = active.length + (f.price[0] > 0 || f.price[1] < 2500 ? 1 : 0);
  return /*#__PURE__*/React.createElement("main", {
    className: "fm-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Home',
      onClick: () => nav.go({
        name: 'home'
      })
    }, {
      label: 'Shop',
      onClick: () => nav.go({
        name: 'home'
      })
    }, {
      label: cat.label
    }]
  })), /*#__PURE__*/React.createElement("header", {
    className: "k-cathead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-cathead__text"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fm-h1"
  }, cat.label), /*#__PURE__*/React.createElement("p", {
    className: "fm-body-lg fm-secondary",
    style: {
      maxWidth: 440
    }
  }, cat.blurb), /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-muted"
  }, cat.count.toLocaleString(), " pieces from ", brands.length * 14, " independent brands")), /*#__PURE__*/React.createElement(Media, {
    tone: cat.tone,
    label: cat.label + ' — editorial room scene',
    ratio: "21 / 9"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-scroll-x",
    style: {
      marginBottom: 24
    }
  }, cat.subs.map(s => /*#__PURE__*/React.createElement(CategoryPill, {
    key: s,
    size: "sm",
    label: s,
    active: sub === s,
    onClick: () => setSub(s)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: "sliders-horizontal",
    className: "k-filterbtn",
    onClick: () => setSheet(true)
  }, "Filters", count ? ' · ' + count : ''), /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-hide-m"
  }, list.length * 9, " products"), active.slice(0, 4).map(([k, v]) => /*#__PURE__*/React.createElement(Tag, {
    key: k + v,
    className: "fm-hide-m",
    onRemove: () => setF({
      ...f,
      [k]: f[k].filter(x => x !== v)
    })
  }, v)), count > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    className: "fm-hide-m",
    onClick: () => setF(init)
  }, "Clear all")), /*#__PURE__*/React.createElement(SortControl, {
    value: sort,
    onChange: setSort
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-catbody"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "k-side"
  }, /*#__PURE__*/React.createElement(Filters, {
    f: f,
    setF: setF,
    brands: brands
  })), /*#__PURE__*/React.createElement("div", null, list.length ? /*#__PURE__*/React.createElement("div", {
    className: "fm-grid",
    style: {
      '--cols': 3
    }
  }, list.map(p => /*#__PURE__*/React.createElement(PCard, {
    key: p.id,
    product: p,
    wishlisted: nav.wish.has(p.id),
    onWishlist: nav.toggleWish,
    onQuickAdd: nav.addToCart,
    onClick: () => nav.go({
      name: 'product',
      id: p.id
    })
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "k-empty"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fm-h3"
  }, "No pieces match these filters"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setF(init)
  }, "Clear filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    total: 9,
    onChange: p => {
      setPage(p);
      nav.scrollTop();
    }
  })))), /*#__PURE__*/React.createElement(Drawer, {
    open: sheet,
    onClose: () => setSheet(false),
    side: "bottom",
    title: "Filters",
    count: count ? count + ' active' : undefined,
    footer: /*#__PURE__*/React.createElement("div", {
      className: "k-row",
      style: {
        flexWrap: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setF(init)
    }, "Clear"), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      onClick: () => setSheet(false)
    }, "Show ", list.length * 9, " products"))
  }, /*#__PURE__*/React.createElement(Filters, {
    f: f,
    setF: setF,
    brands: brands
  })));
}
Object.assign(window, {
  Category,
  sortList
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Category.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Home.jsx
try { (() => {
const {
  Button,
  IconButton,
  Media,
  SectionHeader,
  ProductCard,
  CollectionCard,
  BrandCard,
  Input,
  Price,
  Icon
} = window.FORMEDesignSystem_c41e46;
function ProductGrid({
  items,
  nav,
  cols = 4,
  size
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fm-grid",
    style: {
      '--cols': cols
    }
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    size: size,
    wishlisted: nav.wish.has(p.id),
    onWishlist: nav.toggleWish,
    onQuickAdd: nav.addToCart,
    onClick: () => nav.go({
      name: 'product',
      id: p.id
    })
  })));
}
function ProductRail({
  items,
  nav,
  title,
  eyebrow
}) {
  const ref = React.useRef(null);
  const by = d => ref.current && ref.current.scrollBy({
    left: d * ref.current.clientWidth * 0.75
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: eyebrow,
    title: title,
    action: /*#__PURE__*/React.createElement("div", {
      className: "k-row",
      style: {
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-left",
      label: "Previous",
      variant: "surface",
      onClick: () => by(-1),
      className: "fm-hide-m"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "arrow-right",
      label: "Next",
      variant: "surface",
      onClick: () => by(1),
      className: "fm-hide-m"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      className: "fm-show-m",
      onClick: () => nav.go({
        name: 'category',
        id: 'lighting'
      })
    }, "View all"))
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-rail",
    ref: ref
  }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    ratio: "1 / 1",
    wishlisted: nav.wish.has(p.id),
    onWishlist: nav.toggleWish,
    onQuickAdd: nav.addToCart,
    onClick: () => nav.go({
      name: 'product',
      id: p.id
    })
  }))));
}
function Home({
  nav
}) {
  const D = window.FM_DATA;
  const hero = D.byId.lounge;
  const featured = ['halo', 'lounge', 'carafe', 'vase', 'stand', 'robe', 'dock', 'candle'].map(id => D.byId[id]);
  const coll = D.COLLECTIONS[0];
  const trending = ['mushroom', 'dinner', 'bookends', 'throw', 'cable', 'sconce', 'stool', 'mugs'].map(id => D.byId[id]);
  const [email, setEmail] = React.useState('');
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "fm-container"
  }, /*#__PURE__*/React.createElement("section", {
    className: "k-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-hero__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "Spring edit \xB7 2026"), /*#__PURE__*/React.createElement("h1", {
    className: "fm-display"
  }, "Find things worth having."), /*#__PURE__*/React.createElement("p", {
    className: "fm-body-lg k-hero__copy"
  }, "Furniture, objects and everyday essentials from brands worth discovering."), /*#__PURE__*/React.createElement("div", {
    className: "k-hero__ctas"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => nav.go({
      name: 'category',
      id: 'furniture'
    })
  }, "Explore products"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => nav.scrollTo('k-collection')
  }, "Shop collections"))), /*#__PURE__*/React.createElement("div", {
    className: "k-hero__media"
  }, /*#__PURE__*/React.createElement(Media, {
    tone: "clay",
    label: "Editorial \u2014 living room, lounge chair in morning light",
    ratio: "6 / 5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-hero__pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), "Nordvik \xB7 Copenhagen"), /*#__PURE__*/React.createElement("div", {
    className: "k-float",
    onClick: () => nav.go({
      name: 'product',
      id: hero.id
    })
  }, /*#__PURE__*/React.createElement(Media, {
    tone: "sand",
    ratio: "1 / 1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-float__info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-muted"
  }, hero.brand), /*#__PURE__*/React.createElement("span", {
    className: "fm-body-sm"
  }, hero.name), /*#__PURE__*/React.createElement(Price, {
    amount: hero.price,
    compareAt: hero.compareAt,
    size: "sm"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Browse",
    title: "Shop by category"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-cats"
  }, D.CATS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    className: "k-cat",
    onClick: () => nav.go({
      name: 'category',
      id: c.id
    })
  }, /*#__PURE__*/React.createElement(Media, {
    tone: c.tone,
    ratio: "1 / 1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-cat__chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-cat__name"
  }, c.label), /*#__PURE__*/React.createElement("span", {
    className: "fm-caption"
  }, c.count.toLocaleString(), " pieces")))))), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "New this week",
    title: "Featured pieces",
    description: "Selected by our editors from 40 new independent makers.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      iconRight: "arrow-right",
      onClick: () => nav.go({
        name: 'category',
        id: 'lighting'
      })
    }, "View all")
  }), /*#__PURE__*/React.createElement(ProductGrid, {
    items: featured,
    nav: nav
  })), /*#__PURE__*/React.createElement("section", {
    className: "fm-section",
    id: "k-collection"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-coll"
  }, /*#__PURE__*/React.createElement(CollectionCard, {
    eyebrow: "Curated collection",
    title: coll.title,
    description: coll.description,
    count: coll.count,
    tone: coll.tone,
    imageLabel: "Desk scene \u2014 walnut, felt, steel",
    ratio: "5 / 4",
    onClick: () => nav.go({
      name: 'category',
      id: 'workspace'
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-coll__grid"
  }, coll.items.map(id => D.byId[id]).map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    product: p,
    size: "sm",
    ratio: "1 / 1",
    showSwatches: false,
    wishlisted: nav.wish.has(p.id),
    onWishlist: nav.toggleWish,
    onClick: () => nav.go({
      name: 'product',
      id: p.id
    })
  }))))), /*#__PURE__*/React.createElement(ProductRail, {
    items: trending,
    nav: nav,
    title: "Trending now",
    eyebrow: "Most saved this month"
  }), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    className: "fm-show-m",
    eyebrow: "Independent brands",
    title: "Makers worth knowing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-brands"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-brands__intro"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "Independent brands"), /*#__PURE__*/React.createElement("h2", {
    className: "fm-h2"
  }, "Makers worth knowing"), /*#__PURE__*/React.createElement("p", {
    className: "fm-body fm-secondary"
  }, "Every brand on FORME is reviewed by our team \u2014 for craft, materials and how they treat the people who make their work.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: "arrow-right",
    onClick: () => nav.go({
      name: 'category',
      id: 'lighting'
    })
  }, "All brands")), ['ferro', 'kiln', 'orrin'].map(id => D.BRANDS.find(b => b.id === id)).map(b => /*#__PURE__*/React.createElement(BrandCard, {
    key: b.id,
    name: b.name,
    location: b.location,
    category: b.category,
    tone: b.tone,
    products: b.products,
    following: nav.follows.has(b.id),
    onFollow: () => nav.toggleFollow(b),
    onClick: () => nav.go({
      name: 'category',
      id: 'lighting'
    })
  })))), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-story__media"
  }, /*#__PURE__*/React.createElement(Media, {
    tone: "sage",
    label: "Journal \u2014 potter at the wheel, Porto",
    ratio: "4 / 5"
  }), /*#__PURE__*/React.createElement(Media, {
    tone: "ivory",
    label: "Detail \u2014 glaze test tiles",
    ratio: "3 / 4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-story__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "Journal \xB7 Studio visit"), /*#__PURE__*/React.createElement("h2", {
    className: "fm-h1"
  }, "Clay, patience and the Porto light."), /*#__PURE__*/React.createElement("p", {
    className: "fm-body-lg fm-secondary"
  }, "We spent a week with Kiln & Co., the three-person studio behind our best-selling stoneware. Every piece is thrown, trimmed and glazed by hand \u2014 about forty a day, on a good day."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right"
  }, "Read the story"))))), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-news"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "Newsletter"), /*#__PURE__*/React.createElement("h2", {
    className: "fm-h2"
  }, "Letters from FORME"), /*#__PURE__*/React.createElement("p", {
    className: "fm-body fm-secondary"
  }, "New makers, studio visits and early access to limited runs. Twice a month, never more.")), /*#__PURE__*/React.createElement("form", {
    className: "k-news__form",
    onSubmit: e => {
      e.preventDefault();
      nav.toast({
        message: 'You’re on the list — first letter arrives Thursday.',
        variant: 'success'
      });
      setEmail('');
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "Your email",
    value: email,
    onChange: e => setEmail(e.target.value),
    size: "lg",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    type: "submit"
  }, "Subscribe"))))));
}
Object.assign(window, {
  Home,
  ProductGrid,
  ProductRail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Product.jsx
try { (() => {
const {
  Button,
  Breadcrumbs,
  ProductGallery,
  Rating,
  Price,
  VariantPicker,
  QuantityControl,
  WishlistButton,
  Tag,
  Icon,
  Media,
  SectionHeader,
  Modal
} = window.FORMEDesignSystem_c41e46;
function Accordion({
  title,
  open: o = false,
  children
}) {
  const [open, setOpen] = React.useState(o);
  return /*#__PURE__*/React.createElement("section", {
    className: 'fm-fgroup' + (open ? ' fm-fgroup--open' : '')
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-fgroup__head",
    "aria-expanded": open,
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 18,
    className: "fm-fgroup__chev"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "fm-fgroup__body fm-body-sm fm-secondary"
  }, children));
}
const FINISHES = [{
  value: 'travertine',
  label: 'Travertine',
  color: '#e2d5c1'
}, {
  value: 'black',
  label: 'Black steel',
  color: '#2a2725'
}, {
  value: 'oak',
  label: 'Natural oak',
  color: '#c9a37a'
}, {
  value: 'opal',
  label: 'Opal glass',
  color: '#f4f2ee',
  disabled: true
}];
function Product({
  nav,
  id
}) {
  const D = window.FM_DATA;
  const p = D.byId[id] || D.byId.halo;
  const cat = D.catById[p.cat];
  const brand = D.brandById[p.brandId];
  const [finish, setFinish] = React.useState('travertine');
  const [size, setSize] = React.useState('m');
  const [qty, setQty] = React.useState(1);
  const [guide, setGuide] = React.useState(false);
  React.useEffect(() => {
    setQty(1);
  }, [p.id]);
  const fin = FINISHES.find(x => x.value === finish);
  const add = () => nav.addToCart(p, qty, fin.label + ' · ' + (size === 's' ? 'Small' : size === 'm' ? 'Medium' : 'Large'));
  const images = [{
    tone: p.tone,
    label: p.name + ' — front'
  }, {
    tone: 'ivory',
    label: 'Detail — material'
  }, {
    tone: 'clay',
    label: 'In situ — living room'
  }, {
    tone: 'mist',
    label: 'Scale — with hand'
  }, {
    tone: 'sage',
    label: 'Packaging'
  }];
  const related = D.PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).concat(D.PRODUCTS.filter(x => x.cat !== p.cat)).slice(0, 4);
  const recommended = D.PRODUCTS.filter(x => x.brandId !== p.brandId).slice(4, 12);
  return /*#__PURE__*/React.createElement("main", {
    className: "fm-container k-pad-buybar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0 16px'
    },
    className: "k-crumbs-d"
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Home',
      onClick: () => nav.go({
        name: 'home'
      })
    }, {
      label: cat.label,
      onClick: () => nav.go({
        name: 'category',
        id: cat.id
      })
    }, {
      label: p.name
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-pdp"
  }, /*#__PURE__*/React.createElement(ProductGallery, {
    images: images
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-pdp__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-pdp__title"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-between"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fm-crumbs__link fm-meta",
    style: {
      fontSize: 14
    },
    onClick: () => nav.go({
      name: 'category',
      id: p.cat
    })
  }, p.brand, " \xB7 ", brand.location), p.badge && /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    variant: p.badge === 'Sale' ? 'error' : p.badge === 'New' ? 'inverse' : 'neutral'
  }, p.badge)), /*#__PURE__*/React.createElement("h1", {
    className: "fm-h2"
  }, p.name), /*#__PURE__*/React.createElement(Rating, {
    value: p.rating,
    count: p.reviews
  })), /*#__PURE__*/React.createElement(Price, {
    amount: p.price * qty,
    compareAt: p.compareAt ? p.compareAt * qty : undefined,
    size: "xl",
    showDiscount: true
  }), /*#__PURE__*/React.createElement("p", {
    className: "fm-body fm-secondary"
  }, "Cast by hand in ", brand.location.split(',')[0], ", the ", p.name.toLowerCase(), " pairs a solid base with a soft, diffused glow. Each piece varies slightly \u2014 the marks of how it was made."), /*#__PURE__*/React.createElement(VariantPicker, {
    label: "Finish",
    type: "swatch",
    options: FINISHES,
    value: finish,
    onChange: setFinish
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(VariantPicker, {
    label: "Size",
    options: [{
      value: 's',
      label: 'Small'
    }, {
      value: 'm',
      label: 'Medium'
    }, {
      value: 'l',
      label: 'Large'
    }],
    value: size,
    onChange: setSize
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: () => setGuide(true)
  }, "Size guide"))), /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-row",
    style: {
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(QuantityControl, {
    value: qty,
    onChange: setQty,
    max: 8
  }), /*#__PURE__*/React.createElement(Tag, {
    variant: "success",
    dot: true
  }, "In stock \xB7 ships in 2\u20134 days")), /*#__PURE__*/React.createElement("div", {
    className: "k-buy"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    onClick: add
  }, "Add to cart"), /*#__PURE__*/React.createElement(WishlistButton, {
    variant: "outline",
    size: "lg",
    active: nav.wish.has(p.id),
    onChange: () => nav.toggleWish(p)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-ship"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-ship__row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "Free delivery over $250", /*#__PURE__*/React.createElement("span", {
    className: "fm-caption"
  }, "Estimated arrival Oct 8 \u2013 Oct 10"))), /*#__PURE__*/React.createElement("div", {
    className: "k-ship__row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "rotate-ccw",
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "30-day returns", /*#__PURE__*/React.createElement("span", {
    className: "fm-caption"
  }, "Free collection from your door"))), /*#__PURE__*/React.createElement("div", {
    className: "k-ship__row"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "2-year maker\u2019s warranty"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Accordion, {
    title: "Specifications",
    open: true
  }, /*#__PURE__*/React.createElement("table", {
    className: "k-specs"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Dimensions"), /*#__PURE__*/React.createElement("td", null, "H 38 \xD7 \xD8 26 cm")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Weight"), /*#__PURE__*/React.createElement("td", null, "3.4 kg")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Bulb"), /*#__PURE__*/React.createElement("td", null, "E14 LED, 2700K, included")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Cable"), /*#__PURE__*/React.createElement("td", null, "2 m fabric, inline dimmer")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Made in"), /*#__PURE__*/React.createElement("td", null, brand.location))))), /*#__PURE__*/React.createElement(Accordion, {
    title: "Materials & care"
  }, "Honed ", fin.label.toLowerCase(), " base with a mouth-blown glass shade. Wipe with a soft dry cloth; avoid acidic cleaners on stone."), /*#__PURE__*/React.createElement(Accordion, {
    title: "Shipping & returns"
  }, "Ships fully assembled in recyclable moulded-pulp packaging. Returns accepted within 30 days in original packaging.")))), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-brandband"
  }, /*#__PURE__*/React.createElement(Media, {
    tone: brand.tone,
    label: brand.name + ' — studio',
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 16,
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "About the maker"), /*#__PURE__*/React.createElement("h2", {
    className: "fm-h2"
  }, brand.name), /*#__PURE__*/React.createElement("p", {
    className: "fm-body-lg fm-secondary"
  }, brand.blurb), /*#__PURE__*/React.createElement("div", {
    className: "k-row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: nav.follows.has(brand.id) ? 'primary' : 'secondary',
    onClick: () => nav.toggleFollow(brand)
  }, nav.follows.has(brand.id) ? 'Following' : 'Follow ' + brand.name), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: "arrow-right",
    onClick: () => nav.go({
      name: 'category',
      id: p.cat
    })
  }, "Shop the brand"))))), /*#__PURE__*/React.createElement("section", {
    className: "fm-section"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Complete the look",
    eyebrow: "Related"
  }), /*#__PURE__*/React.createElement(ProductGrid, {
    items: related,
    nav: nav
  })), /*#__PURE__*/React.createElement(ProductRail, {
    items: recommended,
    nav: nav,
    title: "You may also like",
    eyebrow: "Recommended"
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-buybar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-caption"
  }, fin.label), /*#__PURE__*/React.createElement(Price, {
    amount: p.price,
    compareAt: p.compareAt
  })), /*#__PURE__*/React.createElement(WishlistButton, {
    variant: "outline",
    size: "lg",
    active: nav.wish.has(p.id),
    onChange: () => nav.toggleWish(p)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    onClick: add
  }, "Add to cart")), /*#__PURE__*/React.createElement(Modal, {
    open: guide,
    onClose: () => setGuide(false),
    title: "Size guide",
    description: "All measurements in centimetres.",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setGuide(false)
    }, "Done")
  }, /*#__PURE__*/React.createElement("table", {
    className: "k-specs"
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Small"), /*#__PURE__*/React.createElement("td", null, "H 30 \xD7 \xD8 20")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Medium"), /*#__PURE__*/React.createElement("td", null, "H 38 \xD7 \xD8 26")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Large"), /*#__PURE__*/React.createElement("td", null, "H 52 \xD7 \xD8 34"))))));
}
Object.assign(window, {
  Product
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/Search.jsx
try { (() => {
const {
  SearchBar,
  CategoryPill,
  SortControl,
  Button,
  Icon,
  SectionHeader
} = window.FORMEDesignSystem_c41e46;
function Search({
  nav,
  q: initial = ''
}) {
  const D = window.FM_DATA;
  const [q, setQ] = React.useState(initial);
  const [query, setQuery] = React.useState(initial);
  const [cat, setCat] = React.useState('all');
  const [sort, setSort] = React.useState('featured');
  const [recent, setRecent] = React.useState(['travertine lamp', 'linen', 'stoneware', 'desk organiser']);
  React.useEffect(() => {
    setQ(initial);
    setQuery(initial);
  }, [initial]);
  const run = v => {
    const t = (v || '').trim();
    setQuery(t);
    setQ(t);
    setCat('all');
    if (t && !recent.includes(t)) setRecent([t, ...recent].slice(0, 6));
  };
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  let results = words.length ? D.PRODUCTS.filter(p => words.some(w => (p.name + ' ' + p.brand + ' ' + D.catById[p.cat].label).toLowerCase().includes(w))) : [];
  const cats = [...new Set(results.map(p => p.cat))];
  if (cat !== 'all') results = results.filter(p => p.cat === cat);
  results = sortList(results, sort);
  const popular = ['halo', 'carafe', 'lounge', 'vase'].map(id => D.byId[id]);
  return /*#__PURE__*/React.createElement("main", {
    className: "fm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-searchhero"
  }, /*#__PURE__*/React.createElement(SearchBar, {
    size: "lg",
    value: q,
    onChange: setQ,
    onSubmit: run,
    autoFocus: true,
    placeholder: "Search products, brands and designers"
  }), !query && /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-between"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "Recent searches"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    size: "sm",
    onClick: () => setRecent([])
  }, "Clear")), /*#__PURE__*/React.createElement("div", {
    className: "k-recent"
  }, recent.length ? recent.map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    type: "button",
    onClick: () => run(r)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "history",
    size: 14
  }), r)) : /*#__PURE__*/React.createElement("span", {
    className: "fm-meta fm-muted"
  }, "No recent searches"))), /*#__PURE__*/React.createElement("div", {
    className: "k-stack",
    style: {
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "Suggested categories"), /*#__PURE__*/React.createElement("div", {
    className: "k-row",
    style: {
      gap: 8
    }
  }, D.CATS.map(c => /*#__PURE__*/React.createElement(CategoryPill, {
    key: c.id,
    label: c.label,
    tone: c.tone,
    onClick: () => nav.go({
      name: 'category',
      id: c.id
    })
  })))))), !query && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(SectionHeader, {
    title: "Popular right now",
    eyebrow: "Trending searches",
    size: "h3"
  }), /*#__PURE__*/React.createElement(ProductGrid, {
    items: popular,
    nav: nav
  })), query && results.length > 0 && /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "k-between",
    style: {
      marginBottom: 20,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fm-h3"
  }, results.length, " results for \u201C", query, "\u201D"), /*#__PURE__*/React.createElement(SortControl, {
    value: sort,
    onChange: setSort
  })), /*#__PURE__*/React.createElement("div", {
    className: "fm-scroll-x",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(CategoryPill, {
    size: "sm",
    label: "All",
    active: cat === 'all',
    onClick: () => setCat('all')
  }), cats.map(c => /*#__PURE__*/React.createElement(CategoryPill, {
    key: c,
    size: "sm",
    label: D.catById[c].label,
    active: cat === c,
    onClick: () => setCat(c)
  }))), /*#__PURE__*/React.createElement(ProductGrid, {
    items: results,
    nav: nav
  })), query && results.length === 0 && /*#__PURE__*/React.createElement("section", {
    className: "k-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-label fm-muted"
  }, "No results"), /*#__PURE__*/React.createElement("h2", {
    className: "fm-h2"
  }, "Nothing for \u201C", query, "\u201D \u2014 yet."), /*#__PURE__*/React.createElement("p", {
    className: "fm-body fm-secondary",
    style: {
      maxWidth: 420
    }
  }, "Try a broader word, a material like \u201Coak\u201D or \u201Clinen\u201D, or browse a category instead."), /*#__PURE__*/React.createElement("div", {
    className: "k-row",
    style: {
      justifyContent: 'center',
      gap: 8,
      marginTop: 8
    }
  }, ['lamp', 'oak', 'stoneware', 'linen'].map(s => /*#__PURE__*/React.createElement(CategoryPill, {
    key: s,
    size: "sm",
    label: s,
    onClick: () => run(s)
  })))));
}
Object.assign(window, {
  Search
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/Search.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/data.js
try { (() => {
window.FM_DATA = (() => {
  const CATS = [{
    id: 'furniture',
    label: 'Furniture',
    tone: 'clay',
    count: 1284,
    blurb: 'Chairs, tables and storage made to be lived with — and kept for decades.',
    subs: ['All', 'Seating', 'Tables', 'Storage', 'Beds', 'Outdoor']
  }, {
    id: 'lighting',
    label: 'Lighting',
    tone: 'sand',
    count: 642,
    blurb: 'Lamps and fixtures from independent studios. Warm light, honest materials, forms that hold a room.',
    subs: ['All', 'Table lamps', 'Floor lamps', 'Pendants', 'Wall lights', 'Portable']
  }, {
    id: 'decor',
    label: 'Home Decor',
    tone: 'sage',
    count: 2310,
    blurb: 'Vases, textiles and the small things that make a space feel like yours.',
    subs: ['All', 'Vases', 'Textiles', 'Mirrors', 'Wall art', 'Candles']
  }, {
    id: 'kitchen',
    label: 'Kitchen & Dining',
    tone: 'ivory',
    count: 1876,
    blurb: 'Tableware and tools that earn a place on the counter.',
    subs: ['All', 'Tableware', 'Glassware', 'Cookware', 'Serving', 'Linens']
  }, {
    id: 'workspace',
    label: 'Workspace',
    tone: 'mist',
    count: 534,
    blurb: 'Calm, organised desks. Objects for focus.',
    subs: ['All', 'Desk accessories', 'Stationery', 'Storage', 'Lighting']
  }, {
    id: 'lifestyle',
    label: 'Lifestyle',
    tone: 'olive',
    count: 918,
    blurb: 'Everyday essentials, considered.',
    subs: ['All', 'Bath', 'Wellness', 'Bags', 'Garden']
  }, {
    id: 'tech',
    label: 'Tech Accessories',
    tone: 'ash',
    count: 312,
    blurb: 'Docks, cases and cables that look as good as what they hold.',
    subs: ['All', 'Charging', 'Cases', 'Audio', 'Cable care']
  }, {
    id: 'gifts',
    label: 'Objects & Gifts',
    tone: 'terracotta',
    count: 1450,
    blurb: 'Things worth giving — and keeping.',
    subs: ['All', 'Under $100', 'For the host', 'For the desk', 'Gift cards']
  }];
  const B = {
    ferro: {
      id: 'ferro',
      name: 'Studio Ferro',
      location: 'Milan, IT',
      category: 'Lighting',
      tone: 'sand',
      blurb: 'A two-person studio casting lamps in travertine, glass and brushed steel since 2016.'
    },
    nordvik: {
      id: 'nordvik',
      name: 'Nordvik',
      location: 'Copenhagen, DK',
      category: 'Furniture',
      tone: 'clay',
      blurb: 'Solid-wood furniture built in a small workshop north of Copenhagen.'
    },
    kiln: {
      id: 'kiln',
      name: 'Kiln & Co.',
      location: 'Porto, PT',
      category: 'Kitchen & Dining',
      tone: 'sage',
      blurb: 'Hand-thrown stoneware, fired in small batches.'
    },
    mou: {
      id: 'mou',
      name: 'Atelier Mou',
      location: 'Lyon, FR',
      category: 'Home Decor',
      tone: 'mist',
      blurb: 'Textiles and glass with a soft, sculptural hand.'
    },
    paper: {
      id: 'paper',
      name: 'Paper Office',
      location: 'Tokyo, JP',
      category: 'Workspace',
      tone: 'ivory',
      blurb: 'Desk objects for slower, more deliberate work.'
    },
    orrin: {
      id: 'orrin',
      name: 'Orrin',
      location: 'Berlin, DE',
      category: 'Tech Accessories',
      tone: 'ash',
      blurb: 'Machined aluminium and vegetable-tanned leather for the devices you carry.'
    },
    sel: {
      id: 'sel',
      name: 'Maison Sel',
      location: 'Paris, FR',
      category: 'Lifestyle',
      tone: 'olive',
      blurb: 'Linen and bath goods, washed soft.'
    },
    hollow: {
      id: 'hollow',
      name: 'Hollow Goods',
      location: 'Brooklyn, US',
      category: 'Objects & Gifts',
      tone: 'terracotta',
      blurb: 'Small objects in stone and brass.'
    }
  };
  const p = (id, name, brand, cat, price, tone, extra = {}) => ({
    id,
    name,
    brand: B[brand].name,
    brandId: brand,
    cat,
    price,
    tone,
    imageLabel: name,
    rating: extra.rating || 4.7,
    reviews: extra.reviews || 48,
    ...extra
  });
  const PRODUCTS = [p('halo', 'Halo Table Lamp', 'ferro', 'lighting', 280, 'sand', {
    badge: 'New',
    colors: ['#e2d5c1', '#3a3634', '#c9a37a'],
    rating: 4.8,
    reviews: 212
  }), p('arc', 'Arc Floor Lamp', 'ferro', 'lighting', 640, 'ivory', {
    colors: ['#eee8de', '#161413']
  }), p('lounge', 'Lounge Chair No. 4', 'nordvik', 'furniture', 1240, 'clay', {
    compareAt: 1450,
    badge: 'Sale',
    colors: ['#c9a37a', '#5b3d2b'],
    rating: 4.9,
    reviews: 96
  }), p('sideboard', 'Low Oak Sideboard', 'nordvik', 'furniture', 2180, 'sand'), p('carafe', 'Stoneware Carafe', 'kiln', 'kitchen', 68, 'sage', {
    colors: ['#b9bea9', '#eee8de', '#665a54']
  }), p('dinner', 'Speckled Dinner Set, 4 pcs', 'kiln', 'kitchen', 186, 'ivory', {
    badge: 'Bestseller',
    reviews: 330
  }), p('vase', 'Ribbed Glass Vase', 'mou', 'decor', 92, 'mist', {
    colors: ['#dde0dc', '#b9765c']
  }), p('throw', 'Wool Throw, Moss', 'mou', 'decor', 210, 'olive'), p('tray', 'Desk Tray Set', 'paper', 'workspace', 54, 'clay', {
    colors: ['#cfae93', '#3a3634']
  }), p('stand', 'Walnut Monitor Stand', 'paper', 'workspace', 165, 'ash'), p('cable', 'Leather Cable Organiser', 'orrin', 'tech', 48, 'terracotta', {
    colors: ['#b9765c', '#161413']
  }), p('dock', 'Aluminium Charging Dock', 'orrin', 'tech', 129, 'mist', {
    badge: 'New'
  }), p('robe', 'Washed Linen Robe', 'sel', 'lifestyle', 158, 'sand', {
    colors: ['#e2d5c1', '#b9bea9', '#665a54']
  }), p('candle', 'Travertine Candle Holder', 'hollow', 'gifts', 76, 'ivory', {
    badge: 'Limited'
  }), p('bookends', 'Brass Bookends', 'hollow', 'gifts', 120, 'clay'), p('pendant', 'Opal Pendant Lamp', 'ferro', 'lighting', 420, 'mist', {
    rating: 4.6
  }), p('mushroom', 'Mushroom Lamp', 'ferro', 'lighting', 190, 'sage', {
    colors: ['#b9bea9', '#eee8de', '#cfae93']
  }), p('sconce', 'Travertine Wall Sconce', 'ferro', 'lighting', 340, 'sand'), p('clip', 'Clip Lamp, Black', 'orrin', 'lighting', 140, 'slate', {
    badge: 'New'
  }), p('lantern', 'Paper Lantern, Large', 'paper', 'lighting', 220, 'ivory'), p('stool', 'Turned Ash Stool', 'nordvik', 'furniture', 390, 'sand', {
    colors: ['#e2d5c1', '#161413']
  }), p('mirror', 'Round Oak Mirror', 'mou', 'decor', 310, 'clay'), p('mugs', 'Glazed Mugs, Set of 2', 'kiln', 'kitchen', 58, 'terracotta'), p('notebook', 'Linen Notebook', 'paper', 'workspace', 32, 'olive')];
  const byId = Object.fromEntries(PRODUCTS.map(x => [x.id, x]));
  const brandProducts = bid => PRODUCTS.filter(x => x.brandId === bid).map(x => ({
    tone: x.tone
  }));
  const BRANDS = Object.values(B).map(b => ({
    ...b,
    products: brandProducts(b.id)
  }));
  const COLLECTIONS = [{
    id: 'quiet-desk',
    title: 'The Quiet Desk',
    description: 'Objects for focus — walnut, felt and brushed steel.',
    count: 18,
    tone: 'slate',
    items: ['stand', 'tray', 'notebook', 'clip']
  }, {
    id: 'slow-mornings',
    title: 'Slow Mornings',
    description: 'Stoneware, linen and early light.',
    count: 24,
    tone: 'sand',
    items: ['carafe', 'mugs', 'robe', 'halo']
  }, {
    id: 'warm-light',
    title: 'Warm Light',
    description: 'Lamps for the long evenings.',
    count: 32,
    tone: 'ash',
    items: ['halo', 'mushroom', 'sconce', 'pendant']
  }];
  return {
    CATS,
    BRANDS,
    PRODUCTS,
    byId,
    COLLECTIONS,
    catById: Object.fromEntries(CATS.map(c => [c.id, c])),
    brandById: B
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BrandCard = __ds_scope.BrandCard;

__ds_ns.CartItem = __ds_scope.CartItem;

__ds_ns.CollectionCard = __ds_scope.CollectionCard;

__ds_ns.OrderSummary = __ds_scope.OrderSummary;

__ds_ns.Price = __ds_scope.Price;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ProductGallery = __ds_scope.ProductGallery;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.WishlistButton = __ds_scope.WishlistButton;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Media = __ds_scope.Media;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastRegion = __ds_scope.ToastRegion;

__ds_ns.FilterGroup = __ds_scope.FilterGroup;

__ds_ns.PriceRange = __ds_scope.PriceRange;

__ds_ns.SORT_OPTIONS = __ds_scope.SORT_OPTIONS;

__ds_ns.SortControl = __ds_scope.SortControl;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dropdown = __ds_scope.Dropdown;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityControl = __ds_scope.QuantityControl;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.VariantPicker = __ds_scope.VariantPicker;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.CategoryPill = __ds_scope.CategoryPill;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Pagination = __ds_scope.Pagination;

})();
