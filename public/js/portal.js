/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/portal.js":
/*!***************************************!*\
  !*** ./resources/assets/js/portal.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*

Theme: Purpose - Website UI Kit
Product Page: https://themes.getbootstrap.com/product/purpose-website-ui-kit/
Author: Webpixels
Author URI: https://www.webpixels.io

---

Copyright 2018 Webpixels

*/
//
// Swiper
// init of plugin Swiper JS
//


var BgImgHolder = function () {
  // Variables
  var $bgImgHolder = $(".bg-img-holder"); // Methods

  function init($this) {
    var img = $this.children("img").attr("src"),
        position = $this.data('bg-position') ? $this.data('bg-position') : 'initial',
        size = $this.data('bg-size') ? $this.data('bg-size') : 'auto',
        height = $this.data('bg-height') ? $this.data('bg-height') : '100%';
    $this.css("background-image", 'url("' + img + '")').css("background-position", position).css("background-size", size).css("opacity", "1").css("height", height);
  } // Events


  if ($bgImgHolder.length) {
    $bgImgHolder.each(function () {
      init($(this));
    });
  }
}(); //
// Card
//


'use strict'; //
// Card actions
//


var CardActions = function () {
  // Variables
  var $card = $(".card"),
      actions = '.card-product-actions'; // Methods

  function show($this) {
    var $el = $this.find(actions),
        animation = $el.data('animation-in');

    if ($el.length) {
      $el.addClass('in animated ' + animation);
      $el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $el.removeClass('animated ' + animation);
      });
    }
  }

  function hide($this) {
    var $el = $this.find(actions),
        animation = $el.data('animation-out');

    if ($el.length) {
      $el.addClass('animated ' + animation);
      $el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $el.removeClass('in animated ' + animation);
      });
    }
  } // Events


  if ($card.length && $(actions).length) {
    $card.on({
      'mouseenter': function mouseenter() {
        show($(this));
      }
    });
    $card.on({
      'mouseleave': function mouseleave() {
        hide($(this));
      }
    });
  }
}(); //
// Countdown
//


'use strict';

var Countdown = function () {
  // Variables
  var $countdown = $('.countdown'); // Methods

  function init($this) {
    var date = $this.data('countdown-date'),
        template = '<div class="countdown-item"><span class="countdown-digit">%-D</span><span class="countdown-label countdown-days">day%!d</span></div>' + '<div class="countdown-item"><span class="countdown-digit">%H</span><span class="countdown-separator">:</span><span class="countdown-label">hr</span></div>' + '<div class="countdown-item"><span class="countdown-digit">%M</span><span class="countdown-separator">:</span><span class="countdown-label">min</span></div>' + '<div class="countdown-item"><span class="countdown-digit">%S</span><span class="countdown-label">sec</span></div>';
    $this.countdown(date).on('update.countdown', function (event) {
      var $this = $(this).html(event.strftime('' + template));
    });
  } // Events


  if ($countdown.length) {
    $countdown.each(function () {
      init($(this));
    });
  }
}(); //
// Count to (milestone counter)
//


'use strict';

!function (t) {
  t.fn.countTo = function (e) {
    return e = e || {}, t(this).each(function () {
      var a = t.extend({}, t.fn.countTo.defaults, {
        from: t(this).data("from"),
        to: t(this).data("to"),
        speed: t(this).data("speed"),
        refreshInterval: t(this).data("refresh-interval"),
        decimals: t(this).data("decimals")
      }, e),
          n = Math.ceil(a.speed / a.refreshInterval),
          o = (a.to - a.from) / n,
          r = this,
          l = t(this),
          f = 0,
          i = a.from,
          c = l.data("countTo") || {};

      function s(t) {
        var e = a.formatter.call(r, t, a);
        l.text(e);
      }

      l.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval(function () {
        f++, s(i += o), "function" == typeof a.onUpdate && a.onUpdate.call(r, i);
        f >= n && (l.removeData("countTo"), clearInterval(c.interval), i = a.to, "function" == typeof a.onComplete && a.onComplete.call(r, i));
      }, a.refreshInterval), s(i);
    });
  }, t.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: function formatter(t, e) {
      return t.toFixed(e.decimals);
    },
    onUpdate: null,
    onComplete: null
  };
}(jQuery);

var CountTo = function () {
  // Variables
  var milestone = '.milestone-count',
      $milestone = $(milestone); // Methods

  function init($this) {
    inView(milestone).on('enter', function () {
      if (!$this.hasClass('counting-finished')) {
        $this.countTo({
          formatter: function formatter(value, options) {
            return value.toFixed(options.decimals);
          },
          onUpdate: function onUpdate(value) {//console.debug(this);
          },
          onComplete: function onComplete(value) {
            $(this).addClass('counting-finished');
          }
        });
      }
    });
  } // // Events


  if ($milestone.length) {
    init($milestone);
  }
}(); //
// Datepicker
//


'use strict';

var Datepicker = function () {
  //
  // Variables
  //
  var $date = $('[data-toggle="date"]'); //
  // Methods
  //

  function init($this) {
    var options = {
      isableTouchKeyboard: true,
      autoclose: false
    };
    $this.datepicker(options);
  } //
  // Events
  //


  if ($date.length) {
    // Init selects
    $date.each(function () {
      init($(this));
    });
  }
}(); //
// Dropdown
//


'use strict';

var Dropdown = function () {
  // Variables
  var $dropdown = $('.dropdown'); // Methods

  function hideDropdown($this) {
    // Add additional .hide class for animated dropdown menus in order to apply some css behind
    if ($this.hasClass('dropdown-animate')) {
      var $dropdownMenu = $this.find('.dropdown-menu');
      $dropdownMenu.addClass('hide');
      setTimeout(function () {
        $this.removeClass('hide');
      }, 300);
    }
  } // Events


  if ($dropdown.length) {
    $dropdown.on({
      'hide.bs.dropdown': function hideBsDropdown() {
        hideDropdown($dropdown);
      }
    });
  }
}(); //
// Forms
//


'use strict'; //
// Form control
//


var FormControl = function () {
  // Variables
  var $input = $('.form-control'); // Methods

  function init($this) {
    $this.on('focus blur', function (e) {
      $(this).parents('.form-group').toggleClass('focused', e.type === 'focus' || this.value.length > 0);
    }).trigger('blur');
  } // Events


  if ($input.length) {
    init($input);
  }
}(); //
// Autosize textarea
//


var TextareaAutosize = function () {
  // Variables
  var $textarea = $('.textarea-autosize'); // Methods

  function init() {
    autosize($textarea);
  } // Events


  if ($textarea.length) {
    init();
  }
}(); //
// Custom input file
//


var CustomInputFile = function () {
  // Variables
  var $customInputFile = $('.custom-input-file'); // Methods

  function change($input, $this, $e) {
    var fileName,
        $label = $input.next('label'),
        labelVal = $label.html();

    if ($this && $this.files.length > 1) {
      fileName = ($this.getAttribute('data-multiple-caption') || '').replace('{count}', $this.files.length);
    } else if ($e.target.value) {
      fileName = $e.target.value.split('\\').pop();
    }

    if (fileName) {
      $label.find('span').html(fileName);
    } else {
      $label.html(labelVal);
    }
  }

  function focus($input) {
    $input.addClass('has-focus');
  }

  function blur($input) {
    $input.removeClass('has-focus');
  } // Events


  if ($customInputFile.length) {
    $customInputFile.each(function () {
      var $input = $(this);
      $input.on('change', function (e) {
        var $this = this,
            $e = e;
        change($input, $this, $e);
      }); // Firefox bug fix

      $input.on('focus', function () {
        focus($input);
      }).on('blur', function () {
        blur($input);
      });
    });
  }
}(); //
// Google maps
//


var $map = $('#map-canvas'),
    map,
    lat,
    lng,
    color = "#510FA8";

function initMap() {
  map = document.getElementById('map-canvas');
  lat = map.getAttribute('data-lat');
  lng = map.getAttribute('data-lng');
  var myLatlng = new google.maps.LatLng(lat, lng);
  var mapOptions = {
    zoom: 14,
    scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": color
      }, {
        "visibility": "on"
      }]
    }]
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Hello World!'
  });
  var contentString = '<div class="info-window-content"><h5>Webpixels</h5>' + '<h6>Premium Themes · UI/UX · Web Apps</h6>' + '<p>Some more details for directions or company informations...</p></div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
}

if ($map.length) {
  google.maps.event.addDomListener(window, 'load', initMap);
} //
// Highlight
//


'use strict';

var Highlight = function () {
  // Variables
  var $highlight = $('.highlight'); // Methods

  function init($this) {
    hljs.highlightBlock($this);
  } // Events


  if ($highlight.length) {
    $highlight.each(function (i, block) {
      init(block);
    });
  }
}(); //
// Layout
//


'use strict';

var Layout = function () {
  $("body").on("click", "[data-action]", function (e) {
    e.preventDefault();
    var $this = $(this);
    var action = $this.data('action');
    var target = $this.data('target');

    switch (action) {
      case "offcanvas-open":
        target = $this.data("target"), $(target).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + target + " />");
        break;

      case "offcanvas-close":
        target = $this.data("target"), $(target).removeClass("open"), $("body").find(".body-backdrop").remove();
        break;

      case 'aside-open':
        target = $this.data('target');
        $this.addClass('active');
        $(target).addClass('show');
        $('body').append('<div class="body-backdrop" data-action="aside-close" data-target=' + target + ' />');
        break;

      case 'aside-close':
        target = $this.data('target');
        $this.removeClass('active');
        $(target).removeClass('show');
        $('body').find('.body-backdrop').remove();
        break;

      case 'search-open':
        target = $this.data('target');
        $this.addClass('active');
        $(target).addClass('show');
        $('body').addClass('navbar-search-open').append('<div class="body-backdrop body-backdrop-dark" data-action="search-close" data-target="' + target + '" />');
        break;

      case 'search-close':
        target = $this.data('target');
        $('[data-action="search-open"]').removeClass('active');
        $(target).removeClass('show');
        $('body').removeClass('navbar-search-open').find('.body-backdrop').remove();
        break;
    }
  });
}(); //
// Swiper
// init of plugin Swiper JS
//


'use strict';

var Masonry = function () {
  // Variables
  var $masonryContainer = $(".masonry-container"); // Methods

  function init($this) {
    var $el = $this.find('.masonry'),
        $filters = $this.find('.masonry-filter-menu'),
        $defaultFilter = $filters.find('.default'),
        defaultFilterValue = $defaultFilter.data('filter');
    var $masonry = $el.imagesLoaded(function () {
      // Set default filter if exists
      if (defaultFilterValue != undefined && defaultFilterValue != '') {
        if (defaultFilterValue != '*') {
          defaultFilterValue = '.' + defaultFilterValue;
        }

        $defaultFilter.addClass('active');
      } // Plugin options


      var options = {
        itemSelector: '.masonry-item',
        filter: defaultFilterValue
      }; // Init plugin

      $masonry.isotope(options);
    }); // Sorting buttons (filters)

    $filters.on('click', 'a', function () {
      var val = $(this).attr('data-filter');

      if (val == '*') {
        val = '';
      } else {
        val = '.' + val;
      }

      $masonry.isotope({
        filter: filterValue
      });
    });
  } // Events


  if ($masonryContainer.length) {
    $masonryContainer.each(function () {
      init($(this));
    });
  }
}(); //
// Navbar
//


'use strict';

var NavbarCollapse = function () {
  // Variables
  var $nav = $('#navbar-main'),
      $collapse = $('#navbar-main-collapse'),
      $navTop = $('#navbar-top-main'); // Methods

  function showNavbarCollapse($this) {
    $nav.addClass('navbar-collapsed');
    $navTop.addClass('navbar-collapsed');
  }

  function hideNavbarCollapse($this) {
    $this.removeClass('collapsing').addClass('collapsing-out');
    $nav.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
    $navTop.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
  }

  function hiddenNavbarCollapse($this) {
    $this.removeClass('collapsing-out');
    $nav.removeClass('navbar-collapsed-out');
    $navTop.removeClass('navbar-collapsed-out');
  } // Events


  if ($collapse.length) {
    $collapse.on({
      'show.bs.collapse': function showBsCollapse() {
        showNavbarCollapse($collapse);
      }
    });
    $collapse.on({
      'hide.bs.collapse': function hideBsCollapse() {
        hideNavbarCollapse($collapse);
      }
    });
    $collapse.on({
      'hidden.bs.collapse': function hiddenBsCollapse() {
        hiddenNavbarCollapse($collapse);
      }
    });
  }
}(); //
// Sticky Navbar
//


var NavbarSticky = function () {
  // Variables
  var $nav = $('.navbar-sticky'); // Methods

  function init($this) {
    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
    // otherwise change it back to relative

    if (scrollTop > navOffsetTop + 200) {
      $this.addClass('sticky');
    } else {
      $this.removeClass('sticky');
    }
  } // Events


  if ($nav.length) {
    var navOffsetTop = $nav.offset().top; // Init sticky navbar

    init($nav); // re-calculate stickyness on scroll

    $(window).on({
      'scroll': function scroll() {
        init($nav);
      }
    });
  }
}(); //
// Negative margin
//


'use strict';

var NegativeMargin = function () {
  // Variables
  var $item = $('[data-negative-margin]'); // Methods

  function init($this) {
    var $target = $this.find($($this.data('negative-margin'))),
        height = $target.height();
    console.log(height);

    if ($(window).width() > 991) {
      $this.css({
        'margin-top': '-' + height + 'px'
      });
    } else {
      $this.css({
        'margin-top': '0'
      });
    }
  } // Events


  $(window).on({
    'load resize': function loadResize() {
      if ($item.length) {
        $item.each(function () {
          init($(this));
        });
      }
    }
  });
}(); //
// No Ui Slider
//


'use strict'; //
// Single slider
//


var SingleSlider = function () {
  // Variables
  var $sliderContainer = $(".input-slider-container"); // Methods

  function init($this) {
    var $slider = $this.find('.input-slider');
    var sliderId = $slider.attr('id');
    var minValue = $slider.data('range-value-min');
    var maxValue = $slider.data('range-value-max');
    var sliderValue = $this.find('.range-slider-value');
    var sliderValueId = sliderValue.attr('id');
    var startValue = sliderValue.data('range-value-low');
    var c = document.getElementById(sliderId),
        d = document.getElementById(sliderValueId);
    var options = {
      start: [parseInt(startValue)],
      connect: [true, false],
      //step: 1000,
      range: {
        'min': [parseInt(minValue)],
        'max': [parseInt(maxValue)]
      }
    };
    noUiSlider.create(c, options);
    c.noUiSlider.on('update', function (a, b) {
      d.textContent = a[b];
    });
  } // Events


  if ($sliderContainer.length) {
    $sliderContainer.each(function () {
      init($(this));
    });
  }
}(); //
// Range slider
//


var RangeSlider = function () {
  // Variables
  var $sliderContainer = $("#input-slider-range"); // Methods

  function init($this) {
    var c = document.getElementById("input-slider-range"),
        d = document.getElementById("input-slider-range-value-low"),
        e = document.getElementById("input-slider-range-value-high"),
        f = [d, e];
    noUiSlider.create(c, {
      start: [parseInt(d.getAttribute('data-range-value-low')), parseInt(e.getAttribute('data-range-value-high'))],
      connect: !0,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max'))
      }
    }), c.noUiSlider.on("update", function (a, b) {
      f[b].textContent = a[b];
    });
  } // Events


  if ($sliderContainer.length) {
    $sliderContainer.each(function () {
      init($(this));
    });
  }
}(); //
// Popover
//


'use strict';

var Popover = function () {
  // Variables
  var $popover = $('[data-toggle="popover"]'),
      $popoverClass = ''; // Methods

  function init($this) {
    if ($this.data('color')) {
      $popoverClass = 'popover-' + $this.data('color');
    }

    var options = {
      template: '<div class="popover ' + $popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    };
    $this.popover(options);
  } // Events


  if ($popover.length) {
    $popover.each(function () {
      init($(this));
    });
  }
}(); //
// Pricing
//


'use strict';

var Pricing = function () {
  // Variables
  var $pricingContainer = $('.pricing-container'),
      $btn = $('.pricing-container button[data-pricing]'); // Methods

  function init($this) {
    var a = $this.data('pricing'),
        b = $this.parents('.pricing-container'),
        c = $('.' + b.attr('class') + ' [data-pricing-value]');

    if (!$this.hasClass('active')) {
      // Toggle active classes for monthly/yearly buttons
      $('.' + b.attr('class') + ' button[data-pricing]').removeClass('active');
      $this.addClass('active'); // Change price values

      c.each(function () {
        var new_val = $(this).data('pricing-value');
        var old_val = $(this).find('span.price').text();
        $(this).find('span.price').text(new_val);
        $(this).data('pricing-value', old_val);
      });
    }
  } // Events


  if ($pricingContainer.length) {
    $btn.on({
      'click': function click() {
        init($(this));
      }
    });
  }
}(); //
// Scrollbar
//


'use strict';

var Scrollbar = function () {
  // Variables
  var $scrollbar = $('.scrollbar-inner'); // Methods

  function init() {
    $scrollbar.scrollbar().scrollLock();
  } // Events


  if ($scrollbar.length) {
    init();
  }
}(); //
// Scroll to (anchor links)
//


'use strict';

var ScrollTo = function () {
  //
  // Variables
  //
  var $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a'); //
  // Methods
  //

  function scrollTo($this) {
    var $el = $this.attr('href');
    var offset = $this.data('scroll-to-offset') ? $this.data('scroll-to-offset') : 0;
    var options = {
      scrollTop: $($el).offset().top - offset
    }; // Animate scroll to the selected section

    $('html, body').stop(true, true).animate(options, 600);
    event.preventDefault();
  } //
  // Events
  //


  if ($scrollTo.length) {
    $scrollTo.on('click', function (event) {
      scrollTo($(this));
    });
  }
}(); //
// Select2.js ==================================
//


'use strict';

var Select = function () {
  //
  // Variables
  //
  var $select = $('[data-toggle="select"]'); //
  // Methods
  //

  function init($this) {
    var options = {
      dropdownParent: $this.closest('.modal').length ? $this.closest('.modal') : $(document.body),
      minimumResultsForSearch: $this.data('minimum-results-for-search'),
      templateResult: formatAvatar
    };
    $this.select2(options);
  }

  function formatAvatar(avatar) {
    if (!avatar.id) {
      return avatar.text;
    }

    var $option = $(avatar.element);
    var optionAvatar = $option.data('avatar-src');
    var output;

    if (optionAvatar) {
      output = $('<span class="avatar avatar-xs mr-3"><img class="avatar-img rounded-circle" src="' + optionAvatar + '" alt="' + avatar.text + '"></span><span>' + avatar.text + '</span>');
    } else {
      output = avatar.text;
    }

    return output;
  } //
  // Events
  //


  if ($select.length) {
    // Init selects
    $select.each(function () {
      init($(this));
    });
  }
}(); //
// Spotlight
//


'use strict';

var Spotlight = function () {
  // Variables
  var $spotlight = $('.spotlight'); // Methods

  function init($this) {
    var holderHeight;

    if ($this.data('spotlight') == 'fullscreen') {
      if ($this.data('spotlight-offset')) {
        var offsetHeight = $('body').find($this.data('spotlight-offset')).height();
        holderHeight = $(window).height() - offsetHeight;
      } else {
        holderHeight = $(window).height();
      }

      if ($(window).width() > 991) {
        $this.find('.spotlight-holder').css({
          'height': holderHeight + 'px'
        });
      } else {
        $this.find('.spotlight-holder').css({
          'height': 'auto'
        });
      }
    }
  } // Events


  $(window).on({
    'load resize': function loadResize() {
      if ($spotlight.length) {
        $spotlight.each(function () {
          init($(this));
        });
      }
    }
  });
}(); //
// Sticky
//


'use strict';

var Sticky = function () {
  //
  // Variables
  //
  var $sticky = $('[data-toggle="sticky"]'); //
  // Methods
  //

  function init($this) {
    var offset = $this.data('sticky-offset') ? $this.data('sticky-offset') : 0;
    var options = {
      'offset_top': offset
    };
    $this.stick_in_parent(options);
  } //
  // Events
  //


  if ($sticky.length) {
    // Init selects
    $sticky.each(function () {
      init($(this));
    });
  }
}(); //
// Swiper
// init of plugin Swiper JS
//


'use strict';

var WpxSwiper = function () {
  // Variables
  var $swiperContainer = $(".swiper-js-container"),
      animEndEv = 'webkitAnimationEnd animationend'; // Methods

  function init($this) {
    // Swiper elements
    var $el = $this.find('.swiper-container'),
        pagination = $this.find('.swiper-pagination'),
        navNext = $this.find('.swiper-button-next'),
        navPrev = $this.find('.swiper-button-prev'); // Swiper options

    var effect = $el.data('swiper-effect') ? $el.data('swiper-effect') : 'slide',
        direction = $el.data('swiper-direction') ? $el.data('swiper-direction') : 'horizontal',
        initialSlide = $el.data('swiper-initial-slide') ? $el.data('swiper-initial-slide') : 0,
        autoHeight = $el.data('swiper-autoheight') ? $el.data('swiper-autoheight') : false,
        autoplay = $el.data('swiper-autoplay') ? $el.data('swiper-autoplay') : false,
        centeredSlides = $el.data('swiper-centered-slides') ? $el.data('swiper-centered-slides') : false; // Items per slide

    var items = $el.data('swiper-items');
    var itemsSm = $el.data('swiper-sm-items');
    var itemsMd = $el.data('swiper-md-items');
    var itemsLg = $el.data('swiper-lg-items');
    var itemsXl = $el.data('swiper-xl-items'); // Space between items

    var spaceBetween = $el.data('swiper-space-between');
    var spaceBetweenSm = $el.data('swiper-sm-space-between');
    var spaceBetweenMd = $el.data('swiper-md-space-between');
    var spaceBetweenLg = $el.data('swiper-lg-space-between');
    var spaceBetweenXl = $el.data('swiper-xl-space-between'); // Slides per view written in data attributes for adaptive resoutions

    items = items ? items : 1;
    itemsSm = itemsSm ? itemsSm : items;
    itemsMd = itemsMd ? itemsMd : itemsSm;
    itemsLg = itemsLg ? itemsLg : itemsMd;
    itemsXl = itemsXl ? itemsXl : itemsLg; // Space between slides written in data attributes for adaptive resoutions

    spaceBetween = !spaceBetween ? 0 : spaceBetween;
    spaceBetweenSm = !spaceBetweenSm ? spaceBetween : spaceBetweenSm;
    spaceBetweenMd = !spaceBetweenMd ? spaceBetweenSm : spaceBetweenMd;
    spaceBetweenLg = !spaceBetweenLg ? spaceBetweenMd : spaceBetweenLg;
    spaceBetweenXl = !spaceBetweenXl ? spaceBetweenLg : spaceBetweenXl;
    var $swiper = new Swiper($el, {
      pagination: {
        el: pagination,
        clickable: true
      },
      navigation: {
        nextEl: navNext,
        prevEl: navPrev
      },
      slidesPerView: items,
      spaceBetween: spaceBetween,
      initialSlide: initialSlide,
      autoHeight: autoHeight,
      centeredSlides: centeredSlides,
      mousewheel: false,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      grabCursor: true,
      autoplay: autoplay,
      effect: effect,
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 50,
        modifier: 3,
        slideShadows: false
      },
      speed: 800,
      direction: direction,
      preventClicks: true,
      preventClicksPropagation: true,
      observer: true,
      observeParents: true,
      breakpointsInverse: true,
      breakpoints: {
        575: {
          slidesPerView: itemsSm,
          spaceBetweenSlides: spaceBetweenSm
        },
        767: {
          slidesPerView: itemsMd,
          spaceBetweenSlides: spaceBetweenMd
        },
        991: {
          slidesPerView: itemsLg,
          spaceBetweenSlides: spaceBetweenLg
        },
        1199: {
          slidesPerView: itemsXl,
          spaceBetweenSlides: spaceBetweenXl
        }
      }
    });
    console.log($swiper.params);
  } // Events


  $(document).ready(function () {
    if ($swiperContainer.length) {
      $swiperContainer.each(function (i, swiperContainer) {
        init($(swiperContainer));
      });
    }
  });
}(); //
// Tags input
//


'use strict';

var Tags = function () {
  //
  // Variables
  //
  var $tags = $('[data-toggle="tags"]'); //
  // Methods
  //

  function init($this) {
    var options = {
      tagClass: 'badge badge-primary'
    };
    $this.tagsinput(options);
  } //
  // Events
  //


  if ($tags.length) {
    // Init selects
    $tags.each(function () {
      init($(this));
    });
  }
}(); //
// Tooltip
//


'use strict';

var Tooltip = function () {
  // Variables
  var $tooltip = $('[data-toggle="tooltip"]'); // Methods

  function init() {
    $tooltip.tooltip();
  } // Events


  if ($tooltip.length) {
    init();
  }
}(); //
// Typed
// text typing animation
//


'use strict';

var Typed = function () {
  // Variables
  var typed = '.typed',
      $typed = $(typed); // Methods

  function init($this) {
    var el = '#' + $this.attr('id'),
        strings = $this.data('type-this'),
        strings = strings.split(',');
    var options = {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 70,
      loop: true
    };
    var animation = new Typed(el, options);
    inView(el).on('enter', function () {
      animation.start();
    }).on('exit', function () {
      animation.stop();
    });
  } // Events


  if ($typed.length) {
    $typed.each(function () {
      init($(this));
    });
  }
}(); //
// Wavify
//


'use strict';

var Wavify = function () {
  //
  // Variables
  //
  var $wavify = $('[data-toggle="wavify"]'); //
  // Methods
  //

  function init($this) {
    var $path = $this.find('path');
    var options = {
      height: 50,
      bones: 5,
      amplitude: 40,
      speed: .15
    };
    $path.wavify(options);
  } //
  // Events
  //


  if ($wavify.length) {
    // Init selects
    $wavify.each(function () {
      init($(this));
    });
  }
}();

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/assets/js/portal.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vitor/Sites/veauty/resources/assets/js/portal.js */"./resources/assets/js/portal.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wb3J0YWwuanMiXSwibmFtZXMiOlsiQmdJbWdIb2xkZXIiLCIkYmdJbWdIb2xkZXIiLCIkIiwiaW5pdCIsIiR0aGlzIiwiaW1nIiwiY2hpbGRyZW4iLCJhdHRyIiwicG9zaXRpb24iLCJkYXRhIiwic2l6ZSIsImhlaWdodCIsImNzcyIsImxlbmd0aCIsImVhY2giLCJDYXJkQWN0aW9ucyIsIiRjYXJkIiwiYWN0aW9ucyIsInNob3ciLCIkZWwiLCJmaW5kIiwiYW5pbWF0aW9uIiwiYWRkQ2xhc3MiLCJvbmUiLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJvbiIsIkNvdW50ZG93biIsIiRjb3VudGRvd24iLCJkYXRlIiwidGVtcGxhdGUiLCJjb3VudGRvd24iLCJldmVudCIsImh0bWwiLCJzdHJmdGltZSIsInQiLCJmbiIsImNvdW50VG8iLCJlIiwiYSIsImV4dGVuZCIsImRlZmF1bHRzIiwiZnJvbSIsInRvIiwic3BlZWQiLCJyZWZyZXNoSW50ZXJ2YWwiLCJkZWNpbWFscyIsIm4iLCJNYXRoIiwiY2VpbCIsIm8iLCJyIiwibCIsImYiLCJpIiwiYyIsInMiLCJmb3JtYXR0ZXIiLCJjYWxsIiwidGV4dCIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwib25VcGRhdGUiLCJyZW1vdmVEYXRhIiwib25Db21wbGV0ZSIsInRvRml4ZWQiLCJqUXVlcnkiLCJDb3VudFRvIiwibWlsZXN0b25lIiwiJG1pbGVzdG9uZSIsImluVmlldyIsImhhc0NsYXNzIiwidmFsdWUiLCJvcHRpb25zIiwiRGF0ZXBpY2tlciIsIiRkYXRlIiwiaXNhYmxlVG91Y2hLZXlib2FyZCIsImF1dG9jbG9zZSIsImRhdGVwaWNrZXIiLCJEcm9wZG93biIsIiRkcm9wZG93biIsImhpZGVEcm9wZG93biIsIiRkcm9wZG93bk1lbnUiLCJzZXRUaW1lb3V0IiwiRm9ybUNvbnRyb2wiLCIkaW5wdXQiLCJwYXJlbnRzIiwidG9nZ2xlQ2xhc3MiLCJ0eXBlIiwidHJpZ2dlciIsIlRleHRhcmVhQXV0b3NpemUiLCIkdGV4dGFyZWEiLCJhdXRvc2l6ZSIsIkN1c3RvbUlucHV0RmlsZSIsIiRjdXN0b21JbnB1dEZpbGUiLCJjaGFuZ2UiLCIkZSIsImZpbGVOYW1lIiwiJGxhYmVsIiwibmV4dCIsImxhYmVsVmFsIiwiZmlsZXMiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwidGFyZ2V0Iiwic3BsaXQiLCJwb3AiLCJmb2N1cyIsImJsdXIiLCIkbWFwIiwibWFwIiwibGF0IiwibG5nIiwiY29sb3IiLCJpbml0TWFwIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm15TGF0bG5nIiwiZ29vZ2xlIiwibWFwcyIsIkxhdExuZyIsIm1hcE9wdGlvbnMiLCJ6b29tIiwic2Nyb2xsd2hlZWwiLCJjZW50ZXIiLCJtYXBUeXBlSWQiLCJNYXBUeXBlSWQiLCJST0FETUFQIiwic3R5bGVzIiwiTWFwIiwibWFya2VyIiwiTWFya2VyIiwiQW5pbWF0aW9uIiwiRFJPUCIsInRpdGxlIiwiY29udGVudFN0cmluZyIsImluZm93aW5kb3ciLCJJbmZvV2luZG93IiwiY29udGVudCIsImFkZExpc3RlbmVyIiwib3BlbiIsImFkZERvbUxpc3RlbmVyIiwid2luZG93IiwiSGlnaGxpZ2h0IiwiJGhpZ2hsaWdodCIsImhsanMiLCJoaWdobGlnaHRCbG9jayIsImJsb2NrIiwiTGF5b3V0IiwicHJldmVudERlZmF1bHQiLCJhY3Rpb24iLCJhcHBlbmQiLCJyZW1vdmUiLCJNYXNvbnJ5IiwiJG1hc29ucnlDb250YWluZXIiLCIkZmlsdGVycyIsIiRkZWZhdWx0RmlsdGVyIiwiZGVmYXVsdEZpbHRlclZhbHVlIiwiJG1hc29ucnkiLCJpbWFnZXNMb2FkZWQiLCJ1bmRlZmluZWQiLCJpdGVtU2VsZWN0b3IiLCJmaWx0ZXIiLCJpc290b3BlIiwidmFsIiwiZmlsdGVyVmFsdWUiLCJOYXZiYXJDb2xsYXBzZSIsIiRuYXYiLCIkY29sbGFwc2UiLCIkbmF2VG9wIiwic2hvd05hdmJhckNvbGxhcHNlIiwiaGlkZU5hdmJhckNvbGxhcHNlIiwiaGlkZGVuTmF2YmFyQ29sbGFwc2UiLCJOYXZiYXJTdGlja3kiLCJzY3JvbGxUb3AiLCJuYXZPZmZzZXRUb3AiLCJvZmZzZXQiLCJ0b3AiLCJOZWdhdGl2ZU1hcmdpbiIsIiRpdGVtIiwiJHRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIlNpbmdsZVNsaWRlciIsIiRzbGlkZXJDb250YWluZXIiLCIkc2xpZGVyIiwic2xpZGVySWQiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwic2xpZGVyVmFsdWUiLCJzbGlkZXJWYWx1ZUlkIiwic3RhcnRWYWx1ZSIsImQiLCJzdGFydCIsInBhcnNlSW50IiwiY29ubmVjdCIsInJhbmdlIiwibm9VaVNsaWRlciIsImNyZWF0ZSIsImIiLCJ0ZXh0Q29udGVudCIsIlJhbmdlU2xpZGVyIiwibWluIiwibWF4IiwiUG9wb3ZlciIsIiRwb3BvdmVyIiwiJHBvcG92ZXJDbGFzcyIsInBvcG92ZXIiLCJQcmljaW5nIiwiJHByaWNpbmdDb250YWluZXIiLCIkYnRuIiwibmV3X3ZhbCIsIm9sZF92YWwiLCJTY3JvbGxiYXIiLCIkc2Nyb2xsYmFyIiwic2Nyb2xsYmFyIiwic2Nyb2xsTG9jayIsIlNjcm9sbFRvIiwiJHNjcm9sbFRvIiwic2Nyb2xsVG8iLCJzdG9wIiwiYW5pbWF0ZSIsIlNlbGVjdCIsIiRzZWxlY3QiLCJkcm9wZG93blBhcmVudCIsImNsb3Nlc3QiLCJib2R5IiwibWluaW11bVJlc3VsdHNGb3JTZWFyY2giLCJ0ZW1wbGF0ZVJlc3VsdCIsImZvcm1hdEF2YXRhciIsInNlbGVjdDIiLCJhdmF0YXIiLCJpZCIsIiRvcHRpb24iLCJlbGVtZW50Iiwib3B0aW9uQXZhdGFyIiwib3V0cHV0IiwiU3BvdGxpZ2h0IiwiJHNwb3RsaWdodCIsImhvbGRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsIlN0aWNreSIsIiRzdGlja3kiLCJzdGlja19pbl9wYXJlbnQiLCJXcHhTd2lwZXIiLCIkc3dpcGVyQ29udGFpbmVyIiwiYW5pbUVuZEV2IiwicGFnaW5hdGlvbiIsIm5hdk5leHQiLCJuYXZQcmV2IiwiZWZmZWN0IiwiZGlyZWN0aW9uIiwiaW5pdGlhbFNsaWRlIiwiYXV0b0hlaWdodCIsImF1dG9wbGF5IiwiY2VudGVyZWRTbGlkZXMiLCJpdGVtcyIsIml0ZW1zU20iLCJpdGVtc01kIiwiaXRlbXNMZyIsIml0ZW1zWGwiLCJzcGFjZUJldHdlZW4iLCJzcGFjZUJldHdlZW5TbSIsInNwYWNlQmV0d2Vlbk1kIiwic3BhY2VCZXR3ZWVuTGciLCJzcGFjZUJldHdlZW5YbCIsIiRzd2lwZXIiLCJTd2lwZXIiLCJlbCIsImNsaWNrYWJsZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJzbGlkZXNQZXJWaWV3IiwibW91c2V3aGVlbCIsImtleWJvYXJkIiwiZW5hYmxlZCIsIm9ubHlJblZpZXdwb3J0IiwiZ3JhYkN1cnNvciIsImNvdmVyZmxvd0VmZmVjdCIsInJvdGF0ZSIsInN0cmV0Y2giLCJkZXB0aCIsIm1vZGlmaWVyIiwic2xpZGVTaGFkb3dzIiwicHJldmVudENsaWNrcyIsInByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiIsIm9ic2VydmVyIiwib2JzZXJ2ZVBhcmVudHMiLCJicmVha3BvaW50c0ludmVyc2UiLCJicmVha3BvaW50cyIsInNwYWNlQmV0d2VlblNsaWRlcyIsInBhcmFtcyIsInJlYWR5Iiwic3dpcGVyQ29udGFpbmVyIiwiVGFncyIsIiR0YWdzIiwidGFnQ2xhc3MiLCJ0YWdzaW5wdXQiLCJUb29sdGlwIiwiJHRvb2x0aXAiLCJ0b29sdGlwIiwiVHlwZWQiLCJ0eXBlZCIsIiR0eXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJsb29wIiwiV2F2aWZ5IiwiJHdhdmlmeSIsIiRwYXRoIiwiYm9uZXMiLCJhbXBsaXR1ZGUiLCJ3YXZpZnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztB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SSxDQUFDRCxDQUFDLENBQUMsSUFBRCxDQUFGLENBQUo7QUFDQSxLQUZEO0FBR0E7QUFFRCxDQXZDWSxFQUFiLEMiLCJmaWxlIjoiL2pzL3BvcnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvKlxuXG5UaGVtZTogUHVycG9zZSAtIFdlYnNpdGUgVUkgS2l0XG5Qcm9kdWN0IFBhZ2U6IGh0dHBzOi8vdGhlbWVzLmdldGJvb3RzdHJhcC5jb20vcHJvZHVjdC9wdXJwb3NlLXdlYnNpdGUtdWkta2l0L1xuQXV0aG9yOiBXZWJwaXhlbHNcbkF1dGhvciBVUkk6IGh0dHBzOi8vd3d3LndlYnBpeGVscy5pb1xuXG4tLS1cblxuQ29weXJpZ2h0IDIwMTggV2VicGl4ZWxzXG5cbiovXG5cbi8vXG4vLyBTd2lwZXJcbi8vIGluaXQgb2YgcGx1Z2luIFN3aXBlciBKU1xuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQmdJbWdIb2xkZXIgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICRiZ0ltZ0hvbGRlciA9ICQoXCIuYmctaW1nLWhvbGRlclwiKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG5cdFx0dmFyIGltZyA9ICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLmF0dHIoXCJzcmNcIiksXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICR0aGlzLmRhdGEoJ2JnLXBvc2l0aW9uJykgPyAkdGhpcy5kYXRhKCdiZy1wb3NpdGlvbicpIDogJ2luaXRpYWwnLFxuICAgICAgICAgICAgc2l6ZSA9ICR0aGlzLmRhdGEoJ2JnLXNpemUnKSA/ICR0aGlzLmRhdGEoJ2JnLXNpemUnKSA6ICdhdXRvJyxcbiAgICAgICAgICAgIGhlaWdodCA9ICR0aGlzLmRhdGEoJ2JnLWhlaWdodCcpID8gJHRoaXMuZGF0YSgnYmctaGVpZ2h0JykgOiAnMTAwJSc7XG5cblx0XHQkdGhpc1xuXHQgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsICd1cmwoXCInK2ltZysnXCIpJylcblx0ICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1wb3NpdGlvblwiLCBwb3NpdGlvbilcblx0ICAgICAgICAuY3NzKFwiYmFja2dyb3VuZC1zaXplXCIsIHNpemUpXG5cdCAgICAgICAgLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpXG5cdCAgICAgICAgLmNzcyhcImhlaWdodFwiLCBoZWlnaHQpO1xuXHR9XG5cblxuXHQvLyBFdmVudHNcblxuXHRpZiAoJGJnSW1nSG9sZGVyLmxlbmd0aCkge1xuXHRcdCRiZ0ltZ0hvbGRlci5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHR9KVxuXHR9XG5cbn0pKCk7XG5cbi8vXG4vLyBDYXJkXG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuLy9cbi8vIENhcmQgYWN0aW9uc1xuLy9cblxudmFyIENhcmRBY3Rpb25zID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkY2FyZCA9ICQoXCIuY2FyZFwiKSxcblx0XHRhY3Rpb25zID0gJy5jYXJkLXByb2R1Y3QtYWN0aW9ucyc7XG5cblxuXHQvLyBNZXRob2RzXG5cblx0ZnVuY3Rpb24gc2hvdygkdGhpcykge1xuXHRcdHZhciAkZWwgPSAkdGhpcy5maW5kKGFjdGlvbnMpLFxuICAgICAgICBcdGFuaW1hdGlvbiA9ICRlbC5kYXRhKCdhbmltYXRpb24taW4nKTtcblxuICAgICAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgICAgICAgJGVsLmFkZENsYXNzKCdpbiBhbmltYXRlZCAnICsgYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICRlbC5vbmUoJ3dlYmtpdEFuaW1hdGlvbkVuZCBtb3pBbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmQgb2FuaW1hdGlvbmVuZCBhbmltYXRpb25lbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkICcgKyBhbmltYXRpb24pO1xuICAgICAgICAgICAgfSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGlkZSgkdGhpcykge1xuXHRcdHZhciAkZWwgPSAkdGhpcy5maW5kKGFjdGlvbnMpLFxuXHRcdFx0YW5pbWF0aW9uID0gJGVsLmRhdGEoJ2FuaW1hdGlvbi1vdXQnKTtcblxuXHRcdGlmICgkZWwubGVuZ3RoKSB7XG5cdFx0XHQkZWwuYWRkQ2xhc3MoJ2FuaW1hdGVkICcgKyBhbmltYXRpb24pO1xuXHRcdFx0JGVsLm9uZSgnd2Via2l0QW5pbWF0aW9uRW5kIG1vekFuaW1hdGlvbkVuZCBNU0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kIGFuaW1hdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkZWwucmVtb3ZlQ2xhc3MoJ2luIGFuaW1hdGVkICcgKyBhbmltYXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCRjYXJkLmxlbmd0aCAmJiAkKGFjdGlvbnMpLmxlbmd0aCkge1xuXHRcdCRjYXJkLm9uKHtcbiAgICBcdFx0J21vdXNlZW50ZXInOiBmdW5jdGlvbigpIHtcbiAgICBcdFx0XHRzaG93KCQodGhpcykpO1xuICAgIFx0XHR9XG4gICAgXHR9KVxuXG5cdFx0JGNhcmQub24oe1xuICAgIFx0XHQnbW91c2VsZWF2ZSc6IGZ1bmN0aW9uKCkge1xuICAgIFx0XHRcdGhpZGUoJCh0aGlzKSk7XG4gICAgXHRcdH1cbiAgICBcdH0pXG5cdH1cblxufSkoKTtcblxuLy9cbi8vIENvdW50ZG93blxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ291bnRkb3duID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkY291bnRkb3duID0gJCgnLmNvdW50ZG93bicpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblx0XHR2YXIgZGF0ZSA9ICR0aGlzLmRhdGEoJ2NvdW50ZG93bi1kYXRlJyksXG5cdFx0XHR0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiY291bnRkb3duLWl0ZW1cIj48c3BhbiBjbGFzcz1cImNvdW50ZG93bi1kaWdpdFwiPiUtRDwvc3Bhbj48c3BhbiBjbGFzcz1cImNvdW50ZG93bi1sYWJlbCBjb3VudGRvd24tZGF5c1wiPmRheSUhZDwvc3Bhbj48L2Rpdj4nICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwiY291bnRkb3duLWl0ZW1cIj48c3BhbiBjbGFzcz1cImNvdW50ZG93bi1kaWdpdFwiPiVIPC9zcGFuPjxzcGFuIGNsYXNzPVwiY291bnRkb3duLXNlcGFyYXRvclwiPjo8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudGRvd24tbGFiZWxcIj5ocjwvc3Bhbj48L2Rpdj4nICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwiY291bnRkb3duLWl0ZW1cIj48c3BhbiBjbGFzcz1cImNvdW50ZG93bi1kaWdpdFwiPiVNPC9zcGFuPjxzcGFuIGNsYXNzPVwiY291bnRkb3duLXNlcGFyYXRvclwiPjo8L3NwYW4+PHNwYW4gY2xhc3M9XCJjb3VudGRvd24tbGFiZWxcIj5taW48L3NwYW4+PC9kaXY+JyArXG5cdFx0XHQnPGRpdiBjbGFzcz1cImNvdW50ZG93bi1pdGVtXCI+PHNwYW4gY2xhc3M9XCJjb3VudGRvd24tZGlnaXRcIj4lUzwvc3Bhbj48c3BhbiBjbGFzcz1cImNvdW50ZG93bi1sYWJlbFwiPnNlYzwvc3Bhbj48L2Rpdj4nO1xuXG5cdFx0JHRoaXMuY291bnRkb3duKGRhdGUpLm9uKCd1cGRhdGUuY291bnRkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJyArIHRlbXBsYXRlKSk7XG4gICAgICAgIH0pO1xuXHR9XG5cblxuXHQvLyBFdmVudHNcblxuXHRpZiAoJGNvdW50ZG93bi5sZW5ndGgpIHtcblx0XHQkY291bnRkb3duLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpbml0KCQodGhpcykpO1xuXHRcdH0pXG5cdH1cblxufSkoKTtcblxuLy9cbi8vIENvdW50IHRvIChtaWxlc3RvbmUgY291bnRlcilcbi8vXG5cbid1c2Ugc3RyaWN0JztcblxuISBmdW5jdGlvbih0KSB7XG5cdHQuZm4uY291bnRUbyA9IGZ1bmN0aW9uKGUpIHtcblx0XHRyZXR1cm4gZSA9IGUgfHwge30sIHQodGhpcykuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBhID0gdC5leHRlbmQoe30sIHQuZm4uY291bnRUby5kZWZhdWx0cywge1xuXHRcdFx0XHRcdGZyb206IHQodGhpcykuZGF0YShcImZyb21cIiksXG5cdFx0XHRcdFx0dG86IHQodGhpcykuZGF0YShcInRvXCIpLFxuXHRcdFx0XHRcdHNwZWVkOiB0KHRoaXMpLmRhdGEoXCJzcGVlZFwiKSxcblx0XHRcdFx0XHRyZWZyZXNoSW50ZXJ2YWw6IHQodGhpcykuZGF0YShcInJlZnJlc2gtaW50ZXJ2YWxcIiksXG5cdFx0XHRcdFx0ZGVjaW1hbHM6IHQodGhpcykuZGF0YShcImRlY2ltYWxzXCIpXG5cdFx0XHRcdH0sIGUpLFxuXHRcdFx0XHRuID0gTWF0aC5jZWlsKGEuc3BlZWQgLyBhLnJlZnJlc2hJbnRlcnZhbCksXG5cdFx0XHRcdG8gPSAoYS50byAtIGEuZnJvbSkgLyBuLFxuXHRcdFx0XHRyID0gdGhpcyxcblx0XHRcdFx0bCA9IHQodGhpcyksXG5cdFx0XHRcdGYgPSAwLFxuXHRcdFx0XHRpID0gYS5mcm9tLFxuXHRcdFx0XHRjID0gbC5kYXRhKFwiY291bnRUb1wiKSB8fCB7fTtcblxuXHRcdFx0ZnVuY3Rpb24gcyh0KSB7XG5cdFx0XHRcdHZhciBlID0gYS5mb3JtYXR0ZXIuY2FsbChyLCB0LCBhKTtcblx0XHRcdFx0bC50ZXh0KGUpXG5cdFx0XHR9XG5cdFx0XHRsLmRhdGEoXCJjb3VudFRvXCIsIGMpLCBjLmludGVydmFsICYmIGNsZWFySW50ZXJ2YWwoYy5pbnRlcnZhbCksIGMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0ZisrLCBzKGkgKz0gbyksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYS5vblVwZGF0ZSAmJiBhLm9uVXBkYXRlLmNhbGwociwgaSk7XG5cdFx0XHRcdGYgPj0gbiAmJiAobC5yZW1vdmVEYXRhKFwiY291bnRUb1wiKSwgY2xlYXJJbnRlcnZhbChjLmludGVydmFsKSwgaSA9IGEudG8sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYS5vbkNvbXBsZXRlICYmIGEub25Db21wbGV0ZS5jYWxsKHIsIGkpKVxuXHRcdFx0fSwgYS5yZWZyZXNoSW50ZXJ2YWwpLCBzKGkpXG5cdFx0fSlcblx0fSwgdC5mbi5jb3VudFRvLmRlZmF1bHRzID0ge1xuXHRcdGZyb206IDAsXG5cdFx0dG86IDAsXG5cdFx0c3BlZWQ6IDFlMyxcblx0XHRyZWZyZXNoSW50ZXJ2YWw6IDEwMCxcblx0XHRkZWNpbWFsczogMCxcblx0XHRmb3JtYXR0ZXI6IGZ1bmN0aW9uKHQsIGUpIHtcblx0XHRcdHJldHVybiB0LnRvRml4ZWQoZS5kZWNpbWFscylcblx0XHR9LFxuXHRcdG9uVXBkYXRlOiBudWxsLFxuXHRcdG9uQ29tcGxldGU6IG51bGxcblx0fVxufShqUXVlcnkpO1xuXG5cbnZhciBDb3VudFRvID0gKGZ1bmN0aW9uKCkge1xuXG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyIG1pbGVzdG9uZSA9ICcubWlsZXN0b25lLWNvdW50Jyxcblx0XHQkbWlsZXN0b25lID0gJChtaWxlc3RvbmUpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblx0XHRpblZpZXcobWlsZXN0b25lKVxuXHRcdC5vbignZW50ZXInLCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCEgJHRoaXMuaGFzQ2xhc3MoJ2NvdW50aW5nLWZpbmlzaGVkJykpIHtcblx0XHRcdFx0JHRoaXMuY291bnRUbyh7XG5cdFx0XHRcdFx0Zm9ybWF0dGVyOiBmdW5jdGlvbih2YWx1ZSwgb3B0aW9ucykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlLnRvRml4ZWQob3B0aW9ucy5kZWNpbWFscyk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRvblVwZGF0ZTogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdC8vY29uc29sZS5kZWJ1Zyh0aGlzKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdG9uQ29tcGxldGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdjb3VudGluZy1maW5pc2hlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cblx0Ly8gLy8gRXZlbnRzXG5cblx0aWYgKCRtaWxlc3RvbmUubGVuZ3RoKSB7XG5cdFx0aW5pdCgkbWlsZXN0b25lKTtcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gRGF0ZXBpY2tlclxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGF0ZXBpY2tlciA9IChmdW5jdGlvbigpIHtcblxuXHQvL1xuXHQvLyBWYXJpYWJsZXNcblx0Ly9cblxuXHR2YXIgJGRhdGUgPSAkKCdbZGF0YS10b2dnbGU9XCJkYXRlXCJdJyk7XG5cblxuXHQvL1xuXHQvLyBNZXRob2RzXG5cdC8vXG5cblx0ZnVuY3Rpb24gaW5pdCgkdGhpcykge1xuXG5cdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRpc2FibGVUb3VjaEtleWJvYXJkOiB0cnVlLFxuICAgICAgICAgICAgYXV0b2Nsb3NlOiBmYWxzZVxuXHRcdH07XG5cblx0XHQkdGhpcy5kYXRlcGlja2VyKG9wdGlvbnMpO1xuXHR9XG5cblxuXHQvL1xuXHQvLyBFdmVudHNcblx0Ly9cblxuXHRpZiAoJGRhdGUubGVuZ3RoKSB7XG5cblx0XHQvLyBJbml0IHNlbGVjdHNcblx0XHQkZGF0ZS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gRHJvcGRvd25cbi8vXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIERyb3Bkb3duID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkZHJvcGRvd24gPSAkKCcuZHJvcGRvd24nKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBoaWRlRHJvcGRvd24oJHRoaXMpIHtcblxuXHRcdC8vIEFkZCBhZGRpdGlvbmFsIC5oaWRlIGNsYXNzIGZvciBhbmltYXRlZCBkcm9wZG93biBtZW51cyBpbiBvcmRlciB0byBhcHBseSBzb21lIGNzcyBiZWhpbmRcblxuXHRcdGlmICgkdGhpcy5oYXNDbGFzcygnZHJvcGRvd24tYW5pbWF0ZScpKSB7XG5cdFx0XHR2YXIgJGRyb3Bkb3duTWVudSA9ICR0aGlzLmZpbmQoJy5kcm9wZG93bi1tZW51Jyk7XG5cblx0ICAgICAgICAkZHJvcGRvd25NZW51LmFkZENsYXNzKCdoaWRlJyk7XG5cblx0ICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG5cdCAgICAgICAgfSwgMzAwKTtcblx0XHR9XG5cdH1cblxuXG5cdC8vIEV2ZW50c1xuXG5cdGlmICgkZHJvcGRvd24ubGVuZ3RoKSB7XG4gICAgXHQkZHJvcGRvd24ub24oe1xuICAgIFx0XHQnaGlkZS5icy5kcm9wZG93bic6IGZ1bmN0aW9uKCkge1xuICAgIFx0XHRcdGhpZGVEcm9wZG93bigkZHJvcGRvd24pO1xuICAgIFx0XHR9XG4gICAgXHR9KVxuXHR9XG59KSgpO1xuXG4vL1xuLy8gRm9ybXNcbi8vXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vL1xuLy8gRm9ybSBjb250cm9sXG4vL1xuXG52YXIgRm9ybUNvbnRyb2wgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICRpbnB1dCA9ICQoJy5mb3JtLWNvbnRyb2wnKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG5cdFx0JHRoaXMub24oJ2ZvY3VzIGJsdXInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICQodGhpcykucGFyZW50cygnLmZvcm0tZ3JvdXAnKS50b2dnbGVDbGFzcygnZm9jdXNlZCcsIChlLnR5cGUgPT09ICdmb2N1cycgfHwgdGhpcy52YWx1ZS5sZW5ndGggPiAwKSk7XG4gICAgfSkudHJpZ2dlcignYmx1cicpO1xuXHR9XG5cblxuXHQvLyBFdmVudHNcblxuXHRpZiAoJGlucHV0Lmxlbmd0aCkge1xuXHRcdGluaXQoJGlucHV0KTtcblx0fVxuXG59KSgpO1xuXG5cbi8vXG4vLyBBdXRvc2l6ZSB0ZXh0YXJlYVxuLy9cblxudmFyIFRleHRhcmVhQXV0b3NpemUgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICR0ZXh0YXJlYSA9ICQoJy50ZXh0YXJlYS1hdXRvc2l6ZScpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0YXV0b3NpemUoJHRleHRhcmVhKTtcblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCR0ZXh0YXJlYS5sZW5ndGgpIHtcblx0XHRpbml0KCk7XG5cdH1cblxufSkoKTtcblxuXG4vL1xuLy8gQ3VzdG9tIGlucHV0IGZpbGVcbi8vXG5cbnZhciBDdXN0b21JbnB1dEZpbGUgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICRjdXN0b21JbnB1dEZpbGUgPSAkKCcuY3VzdG9tLWlucHV0LWZpbGUnKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBjaGFuZ2UoJGlucHV0LCAkdGhpcywgJGUpIHtcblx0XHR2YXIgZmlsZU5hbWUsXG5cdFx0XHQkbGFiZWwgPSAkaW5wdXQubmV4dCgnbGFiZWwnKSxcblx0XHRcdGxhYmVsVmFsID0gJGxhYmVsLmh0bWwoKTtcblxuXHRcdGlmICgkdGhpcyAmJiAkdGhpcy5maWxlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRmaWxlTmFtZSA9ICgkdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicpIHx8ICcnKS5yZXBsYWNlKCd7Y291bnR9JywgJHRoaXMuZmlsZXMubGVuZ3RoKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoJGUudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRmaWxlTmFtZSA9ICRlLnRhcmdldC52YWx1ZS5zcGxpdCgnXFxcXCcpLnBvcCgpO1xuXHRcdH1cblxuXHRcdGlmIChmaWxlTmFtZSkge1xuXHRcdFx0JGxhYmVsLmZpbmQoJ3NwYW4nKS5odG1sKGZpbGVOYW1lKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQkbGFiZWwuaHRtbChsYWJlbFZhbCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZm9jdXMoJGlucHV0KSB7XG5cdFx0JGlucHV0LmFkZENsYXNzKCdoYXMtZm9jdXMnKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGJsdXIoJGlucHV0KSB7XG5cdFx0JGlucHV0LnJlbW92ZUNsYXNzKCdoYXMtZm9jdXMnKTtcblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCRjdXN0b21JbnB1dEZpbGUubGVuZ3RoKSB7XG5cdFx0JGN1c3RvbUlucHV0RmlsZS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICRpbnB1dCA9ICQodGhpcyk7XG5cblx0XHRcdCRpbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR2YXIgJHRoaXMgPSB0aGlzLFxuXHRcdFx0XHRcdCRlID0gZTtcblx0XHRcdFx0XHRcblx0XHRcdFx0Y2hhbmdlKCRpbnB1dCwgJHRoaXMsICRlKTtcblx0ICAgICAgICB9KTtcblxuXHQgICAgICAgIC8vIEZpcmVmb3ggYnVnIGZpeFxuXHQgICAgICAgICRpbnB1dC5vbignZm9jdXMnLCBmdW5jdGlvbigpIHtcblx0ICAgICAgICAgICAgZm9jdXMoJGlucHV0KTtcblx0ICAgICAgICB9KVxuXHQgICAgICAgIC5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICBibHVyKCRpbnB1dCk7XG5cdCAgICAgICAgfSk7XG5cdFx0fSk7XG5cdH1cbn0pKCk7XG5cblxuLy9cbi8vIEdvb2dsZSBtYXBzXG4vL1xuXG52YXIgJG1hcCA9ICQoJyNtYXAtY2FudmFzJyksXG4gICAgbWFwLFxuICAgIGxhdCxcbiAgICBsbmcsXG4gICAgY29sb3IgPSBcIiM1MTBGQThcIjtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgICBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNhbnZhcycpO1xuICAgIGxhdCA9IG1hcC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGF0Jyk7XG4gICAgbG5nID0gbWFwLmdldEF0dHJpYnV0ZSgnZGF0YS1sbmcnKTtcblxuICAgIHZhciBteUxhdGxuZyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgICB6b29tOiAxNCxcbiAgICAgICAgc2Nyb2xsd2hlZWw6IGZhbHNlLFxuICAgICAgICBjZW50ZXI6IG15TGF0bG5nLFxuICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxuICAgICAgICBzdHlsZXM6IFt7XCJmZWF0dXJlVHlwZVwiOlwiYWRtaW5pc3RyYXRpdmVcIixcImVsZW1lbnRUeXBlXCI6XCJsYWJlbHMudGV4dC5maWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjNDQ0NDQ0XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcImxhbmRzY2FwZVwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiI2YyZjJmMlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1wic2F0dXJhdGlvblwiOi0xMDB9LHtcImxpZ2h0bmVzc1wiOjQ1fV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmhpZ2h3YXlcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkLmFydGVyaWFsXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzLmljb25cIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXRcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcIndhdGVyXCIsXCJlbGVtZW50VHlwZVwiOlwiYWxsXCIsXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6Y29sb3J9LHtcInZpc2liaWxpdHlcIjpcIm9uXCJ9XX1dXG5cbiAgICB9XG4gICAgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNhbnZhcycpLCBtYXBPcHRpb25zKTtcblxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IG15TGF0bG5nLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcbiAgICAgICAgdGl0bGU6ICdIZWxsbyBXb3JsZCEnXG4gICAgfSk7XG5cbiAgICB2YXIgY29udGVudFN0cmluZyA9ICc8ZGl2IGNsYXNzPVwiaW5mby13aW5kb3ctY29udGVudFwiPjxoNT5XZWJwaXhlbHM8L2g1PicgK1xuICAgICAgICAnPGg2PlByZW1pdW0gVGhlbWVzIMK3IFVJL1VYIMK3IFdlYiBBcHBzPC9oNj4nICtcbiAgICAgICAgJzxwPlNvbWUgbW9yZSBkZXRhaWxzIGZvciBkaXJlY3Rpb25zIG9yIGNvbXBhbnkgaW5mb3JtYXRpb25zLi4uPC9wPjwvZGl2Pic7XG5cbiAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICAgICAgY29udGVudDogY29udGVudFN0cmluZ1xuICAgIH0pO1xuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcbiAgICB9KTtcbn1cblxuaWYoJG1hcC5sZW5ndGgpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgaW5pdE1hcCk7XG59XG5cbi8vXG4vLyBIaWdobGlnaHRcbi8vXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEhpZ2hsaWdodCA9IChmdW5jdGlvbigpIHtcblxuXHQvLyBWYXJpYWJsZXNcblxuXHR2YXIgJGhpZ2hsaWdodCA9ICQoJy5oaWdobGlnaHQnKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG5cdFx0aGxqcy5oaWdobGlnaHRCbG9jaygkdGhpcyk7XG5cdH1cblxuXG5cdC8vIEV2ZW50c1xuXG5cdGlmICgkaGlnaGxpZ2h0Lmxlbmd0aCkge1xuXHRcdCRoaWdobGlnaHQuZWFjaChmdW5jdGlvbihpLCBibG9jaykge1xuXHRcdFx0aW5pdChibG9jayk7XG5cdFx0fSlcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gTGF5b3V0XG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBMYXlvdXQgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiW2RhdGEtYWN0aW9uXVwiLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIHZhciBhY3Rpb24gPSAkdGhpcy5kYXRhKCdhY3Rpb24nKTtcbiAgICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwib2ZmY2FudmFzLW9wZW5cIjpcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkdGhpcy5kYXRhKFwidGFyZ2V0XCIpLCAkKHRhcmdldCkuYWRkQ2xhc3MoXCJvcGVuXCIpLCAkKFwiYm9keVwiKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJib2R5LWJhY2tkcm9wXCIgZGF0YS1hY3Rpb249XCJvZmZjYW52YXMtY2xvc2VcIiBkYXRhLXRhcmdldD0nICsgdGFyZ2V0ICsgXCIgLz5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib2ZmY2FudmFzLWNsb3NlXCI6XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJHRoaXMuZGF0YShcInRhcmdldFwiKSwgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKFwib3BlblwiKSwgJChcImJvZHlcIikuZmluZChcIi5ib2R5LWJhY2tkcm9wXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhc2lkZS1vcGVuJzpcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAkdGhpcy5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImJvZHktYmFja2Ryb3BcIiBkYXRhLWFjdGlvbj1cImFzaWRlLWNsb3NlXCIgZGF0YS10YXJnZXQ9Jyt0YXJnZXQrJyAvPicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdhc2lkZS1jbG9zZSc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJHRoaXMuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5yZW1vdmVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5maW5kKCcuYm9keS1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdzZWFyY2gtb3Blbic6XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJHRoaXMuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGFyZ2V0KS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbmF2YmFyLXNlYXJjaC1vcGVuJykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiYm9keS1iYWNrZHJvcCBib2R5LWJhY2tkcm9wLWRhcmtcIiBkYXRhLWFjdGlvbj1cInNlYXJjaC1jbG9zZVwiIGRhdGEtdGFyZ2V0PVwiJyt0YXJnZXQrJ1wiIC8+Jyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3NlYXJjaC1jbG9zZSc6XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gJHRoaXMuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtYWN0aW9uPVwic2VhcmNoLW9wZW5cIl0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0YXJnZXQpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduYXZiYXItc2VhcmNoLW9wZW4nKS5maW5kKCcuYm9keS1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSlcblxufSkoKTtcblxuLy9cbi8vIFN3aXBlclxuLy8gaW5pdCBvZiBwbHVnaW4gU3dpcGVyIEpTXG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBNYXNvbnJ5ID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkbWFzb25yeUNvbnRhaW5lciA9ICQoXCIubWFzb25yeS1jb250YWluZXJcIik7XG5cblxuXHQvLyBNZXRob2RzXG5cblx0ZnVuY3Rpb24gaW5pdCgkdGhpcykge1xuXHRcdHZhciAkZWwgPSAkdGhpcy5maW5kKCcubWFzb25yeScpLFxuXHRcdFx0JGZpbHRlcnMgPSAkdGhpcy5maW5kKCcubWFzb25yeS1maWx0ZXItbWVudScpLFxuXHRcdFx0JGRlZmF1bHRGaWx0ZXIgPSAkZmlsdGVycy5maW5kKCcuZGVmYXVsdCcpLFxuXHRcdFx0ZGVmYXVsdEZpbHRlclZhbHVlID0gJGRlZmF1bHRGaWx0ZXIuZGF0YSgnZmlsdGVyJyk7XG5cblx0XHR2YXIgJG1hc29ucnkgPSAkZWwuaW1hZ2VzTG9hZGVkKGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBTZXQgZGVmYXVsdCBmaWx0ZXIgaWYgZXhpc3RzXG5cblx0XHRcdGlmIChkZWZhdWx0RmlsdGVyVmFsdWUgIT0gdW5kZWZpbmVkICYmIGRlZmF1bHRGaWx0ZXJWYWx1ZSAhPSAnJykge1xuXG5cdFx0XHRcdGlmIChkZWZhdWx0RmlsdGVyVmFsdWUgIT0gJyonKSB7XG5cdFx0XHRcdFx0ZGVmYXVsdEZpbHRlclZhbHVlID0gJy4nICsgZGVmYXVsdEZpbHRlclZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JGRlZmF1bHRGaWx0ZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0fVxuXG5cblx0XHRcdC8vIFBsdWdpbiBvcHRpb25zXG5cdFx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdFx0aXRlbVNlbGVjdG9yOiAnLm1hc29ucnktaXRlbScsXG5cdFx0XHRcdGZpbHRlcjogZGVmYXVsdEZpbHRlclZhbHVlXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBJbml0IHBsdWdpblxuXHRcdFx0JG1hc29ucnkuaXNvdG9wZShvcHRpb25zKTtcblx0XHR9KTtcblxuXG5cdFx0Ly8gU29ydGluZyBidXR0b25zIChmaWx0ZXJzKVxuXG4gICAgICAgICRmaWx0ZXJzLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS5hdHRyKCdkYXRhLWZpbHRlcicpO1xuXG4gICAgICAgICAgICBpZiAodmFsID09ICcqJykge1xuICAgICAgICAgICAgICAgIHZhbCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWwgPSAnLicgKyB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRtYXNvbnJ5Lmlzb3RvcGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyVmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXHR9XG5cblxuXHQvLyBFdmVudHNcblxuXHRpZiAoJG1hc29ucnlDb250YWluZXIubGVuZ3RoKSB7XG5cdFx0JG1hc29ucnlDb250YWluZXIuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGluaXQoJCh0aGlzKSk7XG5cdFx0fSlcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gTmF2YmFyXG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBOYXZiYXJDb2xsYXBzZSA9IChmdW5jdGlvbigpIHtcblxuXHQvLyBWYXJpYWJsZXNcblxuICAgIHZhciAkbmF2ID0gJCgnI25hdmJhci1tYWluJyksXG5cdCAgICAkY29sbGFwc2UgPSAkKCcjbmF2YmFyLW1haW4tY29sbGFwc2UnKSxcbiAgICAgICAgJG5hdlRvcCA9ICQoJyNuYXZiYXItdG9wLW1haW4nKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBzaG93TmF2YmFyQ29sbGFwc2UoJHRoaXMpIHtcbiAgICAgICAgJG5hdi5hZGRDbGFzcygnbmF2YmFyLWNvbGxhcHNlZCcpO1xuICAgICAgICAkbmF2VG9wLmFkZENsYXNzKCduYXZiYXItY29sbGFwc2VkJyk7XG5cdH1cblxuICAgIGZ1bmN0aW9uIGhpZGVOYXZiYXJDb2xsYXBzZSgkdGhpcykge1xuICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpLmFkZENsYXNzKCdjb2xsYXBzaW5nLW91dCcpO1xuICAgICAgICAkbmF2LnJlbW92ZUNsYXNzKCduYXZiYXItY29sbGFwc2VkJykuYWRkQ2xhc3MoJ25hdmJhci1jb2xsYXBzZWQtb3V0Jyk7XG4gICAgICAgICRuYXZUb3AucmVtb3ZlQ2xhc3MoJ25hdmJhci1jb2xsYXBzZWQnKS5hZGRDbGFzcygnbmF2YmFyLWNvbGxhcHNlZC1vdXQnKTtcblx0fVxuXG4gICAgZnVuY3Rpb24gaGlkZGVuTmF2YmFyQ29sbGFwc2UoJHRoaXMpIHtcbiAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmctb3V0Jyk7XG4gICAgICAgICRuYXYucmVtb3ZlQ2xhc3MoJ25hdmJhci1jb2xsYXBzZWQtb3V0Jyk7XG4gICAgICAgICRuYXZUb3AucmVtb3ZlQ2xhc3MoJ25hdmJhci1jb2xsYXBzZWQtb3V0Jyk7XG5cdH1cblxuXG5cdC8vIEV2ZW50c1xuXG4gICAgaWYgKCRjb2xsYXBzZS5sZW5ndGgpIHtcbiAgICBcdCRjb2xsYXBzZS5vbih7XG4gICAgXHRcdCdzaG93LmJzLmNvbGxhcHNlJzogZnVuY3Rpb24oKSB7XG4gICAgXHRcdFx0c2hvd05hdmJhckNvbGxhcHNlKCRjb2xsYXBzZSk7XG4gICAgXHRcdH1cbiAgICBcdH0pXG5cbiAgICAgICAgJGNvbGxhcHNlLm9uKHtcbiAgICBcdFx0J2hpZGUuYnMuY29sbGFwc2UnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBoaWRlTmF2YmFyQ29sbGFwc2UoJGNvbGxhcHNlKTtcbiAgICBcdFx0fVxuICAgIFx0fSlcblxuICAgICAgICAkY29sbGFwc2Uub24oe1xuICAgIFx0XHQnaGlkZGVuLmJzLmNvbGxhcHNlJzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuTmF2YmFyQ29sbGFwc2UoJGNvbGxhcHNlKTtcbiAgICBcdFx0fVxuICAgIFx0fSlcbiAgICB9XG5cbn0pKCk7XG5cblxuLy9cbi8vIFN0aWNreSBOYXZiYXJcbi8vXG5cbnZhciBOYXZiYXJTdGlja3kgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICRuYXYgPSAkKCcubmF2YmFyLXN0aWNreScpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblxuXHRcdHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7IC8vIG91ciBjdXJyZW50IHZlcnRpY2FsIHBvc2l0aW9uIGZyb20gdGhlIHRvcFxuXG5cdFx0Ly8gaWYgd2UndmUgc2Nyb2xsZWQgbW9yZSB0aGFuIHRoZSBuYXZpZ2F0aW9uLCBjaGFuZ2UgaXRzIHBvc2l0aW9uIHRvIGZpeGVkIHRvIHN0aWNrIHRvIHRvcCxcblx0XHQvLyBvdGhlcndpc2UgY2hhbmdlIGl0IGJhY2sgdG8gcmVsYXRpdmVcblx0XHRpZiAoc2Nyb2xsVG9wID4gKG5hdk9mZnNldFRvcCArIDIwMCkpIHtcblx0XHRcdCR0aGlzLmFkZENsYXNzKCdzdGlja3knKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHRoaXMucmVtb3ZlQ2xhc3MoJ3N0aWNreScpO1xuXHRcdH1cblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCRuYXYubGVuZ3RoKSB7XG5cbiAgICAgICAgdmFyIG5hdk9mZnNldFRvcCA9ICRuYXYub2Zmc2V0KCkudG9wO1xuXG5cdFx0Ly8gSW5pdCBzdGlja3kgbmF2YmFyXG5cdFx0aW5pdCgkbmF2KTtcblxuXHRcdC8vIHJlLWNhbGN1bGF0ZSBzdGlja3luZXNzIG9uIHNjcm9sbFxuXHRcdCQod2luZG93KS5vbih7XG5cdFx0XHQnc2Nyb2xsJzogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGluaXQoJG5hdik7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufSkoKTtcblxuLy9cbi8vIE5lZ2F0aXZlIG1hcmdpblxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgTmVnYXRpdmVNYXJnaW4gPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICRpdGVtID0gJCgnW2RhdGEtbmVnYXRpdmUtbWFyZ2luXScpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblx0XHR2YXIgJHRhcmdldCA9ICR0aGlzLmZpbmQoJCgkdGhpcy5kYXRhKCduZWdhdGl2ZS1tYXJnaW4nKSkpLFxuXHRcdFx0aGVpZ2h0ID0gJHRhcmdldC5oZWlnaHQoKTtcblxuXHRcdFx0Y29uc29sZS5sb2coaGVpZ2h0KVxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA5OTEpIHtcbiAgICAgICAgICAgICR0aGlzLmNzcyh7J21hcmdpbi10b3AnOiAnLScgKyBoZWlnaHQgKyAncHgnfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy5jc3MoeydtYXJnaW4tdG9wJzogJzAnfSk7XG4gICAgICAgIH1cblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0JCh3aW5kb3cpLm9uKHtcblx0XHQnbG9hZCByZXNpemUnOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkaXRlbS5sZW5ndGgpIHtcblx0XHRcdFx0JGl0ZW0uZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpbml0KCQodGhpcykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cbn0pKCk7XG5cbi8vXG4vLyBObyBVaSBTbGlkZXJcbi8vXG5cbid1c2Ugc3RyaWN0JztcblxuXG4vL1xuLy8gU2luZ2xlIHNsaWRlclxuLy9cblxudmFyIFNpbmdsZVNsaWRlciA9IChmdW5jdGlvbigpIHtcblxuXHQvLyBWYXJpYWJsZXNcblxuXHR2YXIgJHNsaWRlckNvbnRhaW5lciA9ICQoXCIuaW5wdXQtc2xpZGVyLWNvbnRhaW5lclwiKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG5cdFx0dmFyICRzbGlkZXIgPSAkdGhpcy5maW5kKCcuaW5wdXQtc2xpZGVyJyk7XG5cdFx0dmFyIHNsaWRlcklkID0gJHNsaWRlci5hdHRyKCdpZCcpO1xuXHRcdHZhciBtaW5WYWx1ZSA9ICRzbGlkZXIuZGF0YSgncmFuZ2UtdmFsdWUtbWluJyk7XG5cdFx0dmFyIG1heFZhbHVlID0gJHNsaWRlci5kYXRhKCdyYW5nZS12YWx1ZS1tYXgnKTtcblxuXHRcdHZhciBzbGlkZXJWYWx1ZSA9ICR0aGlzLmZpbmQoJy5yYW5nZS1zbGlkZXItdmFsdWUnKTtcblx0XHR2YXIgc2xpZGVyVmFsdWVJZCA9IHNsaWRlclZhbHVlLmF0dHIoJ2lkJyk7XG5cdFx0dmFyIHN0YXJ0VmFsdWUgPSBzbGlkZXJWYWx1ZS5kYXRhKCdyYW5nZS12YWx1ZS1sb3cnKTtcblxuXHRcdHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySWQpLFxuXHRcdFx0ZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlclZhbHVlSWQpO1xuXG5cdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHRzdGFydDogW3BhcnNlSW50KHN0YXJ0VmFsdWUpXSxcblx0XHRcdGNvbm5lY3Q6IFt0cnVlLCBmYWxzZV0sXG5cdFx0XHQvL3N0ZXA6IDEwMDAsXG5cdFx0XHRyYW5nZToge1xuXHRcdFx0XHQnbWluJzogW3BhcnNlSW50KG1pblZhbHVlKV0sXG5cdFx0XHRcdCdtYXgnOiBbcGFyc2VJbnQobWF4VmFsdWUpXVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG5vVWlTbGlkZXIuY3JlYXRlKGMsIG9wdGlvbnMpO1xuXG5cdFx0Yy5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHRkLnRleHRDb250ZW50ID0gYVtiXTtcblx0XHR9KTtcblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCRzbGlkZXJDb250YWluZXIubGVuZ3RoKSB7XG5cdFx0JHNsaWRlckNvbnRhaW5lci5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG59KSgpO1xuXG5cbi8vXG4vLyBSYW5nZSBzbGlkZXJcbi8vXG5cbnZhciBSYW5nZVNsaWRlciA9IChmdW5jdGlvbigpIHtcblxuXHQvLyBWYXJpYWJsZXNcblxuXHR2YXIgJHNsaWRlckNvbnRhaW5lciA9ICQoXCIjaW5wdXQtc2xpZGVyLXJhbmdlXCIpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblx0XHR2YXIgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtc2xpZGVyLXJhbmdlXCIpLFxuICAgICAgICAgICAgZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtc2xpZGVyLXJhbmdlLXZhbHVlLWxvd1wiKSxcbiAgICAgICAgICAgIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXNsaWRlci1yYW5nZS12YWx1ZS1oaWdoXCIpLFxuICAgICAgICAgICAgZiA9IFtkLCBlXTtcblxuICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShjLCB7XG4gICAgICAgICAgICBzdGFydDogW3BhcnNlSW50KGQuZ2V0QXR0cmlidXRlKCdkYXRhLXJhbmdlLXZhbHVlLWxvdycpKSwgcGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmFuZ2UtdmFsdWUtaGlnaCcpKV0sXG4gICAgICAgICAgICBjb25uZWN0OiAhMCxcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgbWluOiBwYXJzZUludChjLmdldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZS12YWx1ZS1taW4nKSksXG4gICAgICAgICAgICAgICAgbWF4OiBwYXJzZUludChjLmdldEF0dHJpYnV0ZSgnZGF0YS1yYW5nZS12YWx1ZS1tYXgnKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSksIGMubm9VaVNsaWRlci5vbihcInVwZGF0ZVwiLCBmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICBmW2JdLnRleHRDb250ZW50ID0gYVtiXVxuICAgICAgICB9KVxuXHR9XG5cblxuXHQvLyBFdmVudHNcblxuXHRpZiAoJHNsaWRlckNvbnRhaW5lci5sZW5ndGgpIHtcblx0XHQkc2xpZGVyQ29udGFpbmVyLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpbml0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cbn0pKCk7XG5cbi8vXG4vLyBQb3BvdmVyXG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBQb3BvdmVyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkcG9wb3ZlciA9ICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKSxcblx0XHQkcG9wb3ZlckNsYXNzID0gJyc7XG5cblxuXHQvLyBNZXRob2RzXG5cblx0ZnVuY3Rpb24gaW5pdCgkdGhpcykge1xuXHRcdGlmICgkdGhpcy5kYXRhKCdjb2xvcicpKSB7XG5cdFx0XHQkcG9wb3ZlckNsYXNzID0gJ3BvcG92ZXItJyArICR0aGlzLmRhdGEoJ2NvbG9yJyk7XG5cdFx0fVxuXG5cdFx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0XHR0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJwb3BvdmVyICcgKyAkcG9wb3ZlckNsYXNzICsgJ1wiIHJvbGU9XCJ0b29sdGlwXCI+PGRpdiBjbGFzcz1cImFycm93XCI+PC9kaXY+PGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIj48L2gzPjxkaXYgY2xhc3M9XCJwb3BvdmVyLWJvZHlcIj48L2Rpdj48L2Rpdj4nXG5cdFx0fTtcblxuXHRcdCR0aGlzLnBvcG92ZXIob3B0aW9ucyk7XG5cdH1cblxuXG5cdC8vIEV2ZW50c1xuXG5cdGlmICgkcG9wb3Zlci5sZW5ndGgpIHtcblx0XHQkcG9wb3Zlci5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gUHJpY2luZ1xuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBQcmljaW5nID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkcHJpY2luZ0NvbnRhaW5lciA9ICQoJy5wcmljaW5nLWNvbnRhaW5lcicpLFxuXHRcdCRidG4gPSAkKCcucHJpY2luZy1jb250YWluZXIgYnV0dG9uW2RhdGEtcHJpY2luZ10nKTtcblxuXG5cdC8vIE1ldGhvZHNcblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG4gICAgICAgIHZhciBhID0gJHRoaXMuZGF0YSgncHJpY2luZycpLFxuICAgICAgICAgICAgYiA9ICR0aGlzLnBhcmVudHMoJy5wcmljaW5nLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgYyA9ICQoJy4nK2IuYXR0cignY2xhc3MnKSsnIFtkYXRhLXByaWNpbmctdmFsdWVdJyk7XG5cblxuICAgICAgICBpZighJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAvLyBUb2dnbGUgYWN0aXZlIGNsYXNzZXMgZm9yIG1vbnRobHkveWVhcmx5IGJ1dHRvbnNcbiAgICAgICAgICAgICQoJy4nK2IuYXR0cignY2xhc3MnKSsnIGJ1dHRvbltkYXRhLXByaWNpbmddJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAvLyBDaGFuZ2UgcHJpY2UgdmFsdWVzXG4gICAgICAgICAgICBjLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld192YWwgPSAkKHRoaXMpLmRhdGEoJ3ByaWNpbmctdmFsdWUnKTtcbiAgICAgICAgICAgICAgICB2YXIgb2xkX3ZhbCA9ICQodGhpcykuZmluZCgnc3Bhbi5wcmljZScpLnRleHQoKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnc3Bhbi5wcmljZScpLnRleHQobmV3X3ZhbCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdwcmljaW5nLXZhbHVlJywgb2xkX3ZhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXHR9XG5cblxuXHQvLyBFdmVudHNcblxuXHRpZiAoJHByaWNpbmdDb250YWluZXIubGVuZ3RoKSB7XG5cdFx0JGJ0bi5vbih7XG4gICAgXHRcdCdjbGljayc6IGZ1bmN0aW9uKCkge1xuICAgIFx0XHRcdGluaXQoJCh0aGlzKSk7XG4gICAgXHRcdH1cbiAgICBcdH0pXG5cdH1cblxufSkoKTtcblxuLy9cbi8vIFNjcm9sbGJhclxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgU2Nyb2xsYmFyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkc2Nyb2xsYmFyID0gJCgnLnNjcm9sbGJhci1pbm5lcicpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0JHNjcm9sbGJhci5zY3JvbGxiYXIoKS5zY3JvbGxMb2NrKClcblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCRzY3JvbGxiYXIubGVuZ3RoKSB7XG5cdFx0aW5pdCgpO1xuXHR9XG5cbn0pKCk7XG5cbi8vXG4vLyBTY3JvbGwgdG8gKGFuY2hvciBsaW5rcylcbi8vXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFNjcm9sbFRvID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vXG5cdC8vIFZhcmlhYmxlc1xuXHQvL1xuXG5cdHZhciAkc2Nyb2xsVG8gPSAkKCcuc2Nyb2xsLW1lLCBbZGF0YS1zY3JvbGwtdG9dLCAudG9jLWVudHJ5IGEnKTtcblxuXG5cdC8vXG5cdC8vIE1ldGhvZHNcblx0Ly9cblxuXHRmdW5jdGlvbiBzY3JvbGxUbygkdGhpcykge1xuXHRcdHZhciAkZWwgPSAkdGhpcy5hdHRyKCdocmVmJyk7XG4gICAgICAgIHZhciBvZmZzZXQgPSAkdGhpcy5kYXRhKCdzY3JvbGwtdG8tb2Zmc2V0JykgPyAkdGhpcy5kYXRhKCdzY3JvbGwtdG8tb2Zmc2V0JykgOiAwO1xuXHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0c2Nyb2xsVG9wOiAkKCRlbCkub2Zmc2V0KCkudG9wIC0gb2Zmc2V0XG5cdFx0fTtcblxuICAgICAgICAvLyBBbmltYXRlIHNjcm9sbCB0byB0aGUgc2VsZWN0ZWQgc2VjdGlvblxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCh0cnVlLCB0cnVlKS5hbmltYXRlKG9wdGlvbnMsIDYwMCk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cblx0Ly9cblx0Ly8gRXZlbnRzXG5cdC8vXG5cblx0aWYgKCRzY3JvbGxUby5sZW5ndGgpIHtcblx0XHQkc2Nyb2xsVG8ub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHNjcm9sbFRvKCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cbn0pKCk7XG5cbi8vXG4vLyBTZWxlY3QyLmpzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFNlbGVjdCA9IChmdW5jdGlvbigpIHtcblxuXHQvL1xuXHQvLyBWYXJpYWJsZXNcblx0Ly9cblxuXHR2YXIgJHNlbGVjdCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInNlbGVjdFwiXScpO1xuXG5cblx0Ly9cblx0Ly8gTWV0aG9kc1xuXHQvL1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdGRyb3Bkb3duUGFyZW50OiAkdGhpcy5jbG9zZXN0KCcubW9kYWwnKS5sZW5ndGggPyAkdGhpcy5jbG9zZXN0KCcubW9kYWwnKSA6ICQoZG9jdW1lbnQuYm9keSksXG5cdFx0XHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogJHRoaXMuZGF0YSgnbWluaW11bS1yZXN1bHRzLWZvci1zZWFyY2gnKSxcblx0XHRcdHRlbXBsYXRlUmVzdWx0OiBmb3JtYXRBdmF0YXJcblx0XHR9O1xuXG5cdFx0JHRoaXMuc2VsZWN0MihvcHRpb25zKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGZvcm1hdEF2YXRhcihhdmF0YXIpIHtcblx0XHRpZiAoIWF2YXRhci5pZCkge1xuXHRcdFx0cmV0dXJuIGF2YXRhci50ZXh0O1xuXHRcdH1cblxuXHRcdHZhciAkb3B0aW9uID0gJChhdmF0YXIuZWxlbWVudCk7XG5cdFx0dmFyIG9wdGlvbkF2YXRhciA9ICRvcHRpb24uZGF0YSgnYXZhdGFyLXNyYycpO1xuXHRcdHZhciBvdXRwdXQ7XG5cblx0XHRpZiAob3B0aW9uQXZhdGFyKSB7XG5cdFx0XHRvdXRwdXQgPSAkKCc8c3BhbiBjbGFzcz1cImF2YXRhciBhdmF0YXIteHMgbXItM1wiPjxpbWcgY2xhc3M9XCJhdmF0YXItaW1nIHJvdW5kZWQtY2lyY2xlXCIgc3JjPVwiJyArIG9wdGlvbkF2YXRhciArICdcIiBhbHQ9XCInICsgYXZhdGFyLnRleHQgKyAnXCI+PC9zcGFuPjxzcGFuPicgKyBhdmF0YXIudGV4dCArICc8L3NwYW4+Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dCA9IGF2YXRhci50ZXh0O1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXG5cdC8vXG5cdC8vIEV2ZW50c1xuXHQvL1xuXG5cdGlmICgkc2VsZWN0Lmxlbmd0aCkge1xuXG5cdFx0Ly8gSW5pdCBzZWxlY3RzXG5cdFx0JHNlbGVjdC5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gU3BvdGxpZ2h0XG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTcG90bGlnaHQgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly8gVmFyaWFibGVzXG5cblx0dmFyICRzcG90bGlnaHQgPSAkKCcuc3BvdGxpZ2h0Jyk7XG5cblxuXHQvLyBNZXRob2RzXG5cblx0ZnVuY3Rpb24gaW5pdCgkdGhpcykge1xuXG5cdFx0dmFyIGhvbGRlckhlaWdodDtcblxuXHRcdGlmICgkdGhpcy5kYXRhKCdzcG90bGlnaHQnKSA9PSAnZnVsbHNjcmVlbicpIHtcblx0XHRcdGlmICgkdGhpcy5kYXRhKCdzcG90bGlnaHQtb2Zmc2V0JykpIHtcblx0XHRcdFx0dmFyIG9mZnNldEhlaWdodCA9ICQoJ2JvZHknKS5maW5kKCR0aGlzLmRhdGEoJ3Nwb3RsaWdodC1vZmZzZXQnKSkuaGVpZ2h0KCk7XG5cdFx0XHRcdGhvbGRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIG9mZnNldEhlaWdodDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvbGRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCQod2luZG93KS53aWR0aCgpID4gOTkxKSB7XG5cdFx0XHRcdCR0aGlzLmZpbmQoJy5zcG90bGlnaHQtaG9sZGVyJykuY3NzKHtcblx0XHRcdFx0XHQnaGVpZ2h0JzogaG9sZGVySGVpZ2h0ICsgJ3B4J1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCR0aGlzLmZpbmQoJy5zcG90bGlnaHQtaG9sZGVyJykuY3NzKHtcblx0XHRcdFx0XHQnaGVpZ2h0JzogJ2F1dG8nXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0JCh3aW5kb3cpLm9uKHtcblx0XHQnbG9hZCByZXNpemUnOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICgkc3BvdGxpZ2h0Lmxlbmd0aCkge1xuXHRcdFx0XHQkc3BvdGxpZ2h0LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuXG59KSgpO1xuXG4vL1xuLy8gU3RpY2t5XG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBTdGlja3kgPSAoZnVuY3Rpb24oKSB7XG5cblx0Ly9cblx0Ly8gVmFyaWFibGVzXG5cdC8vXG5cblx0dmFyICRzdGlja3kgPSAkKCdbZGF0YS10b2dnbGU9XCJzdGlja3lcIl0nKTtcblxuXG5cdC8vXG5cdC8vIE1ldGhvZHNcblx0Ly9cblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gJHRoaXMuZGF0YSgnc3RpY2t5LW9mZnNldCcpID8gJHRoaXMuZGF0YSgnc3RpY2t5LW9mZnNldCcpIDogMDtcblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdCdvZmZzZXRfdG9wJzogb2Zmc2V0XG5cdFx0fTtcblxuXHRcdCR0aGlzLnN0aWNrX2luX3BhcmVudChvcHRpb25zKTtcblx0fVxuXG5cblx0Ly9cblx0Ly8gRXZlbnRzXG5cdC8vXG5cblx0aWYgKCRzdGlja3kubGVuZ3RoKSB7XG5cblx0XHQvLyBJbml0IHNlbGVjdHNcblx0XHQkc3RpY2t5LmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpbml0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cbn0pKCk7XG5cbi8vXG4vLyBTd2lwZXJcbi8vIGluaXQgb2YgcGx1Z2luIFN3aXBlciBKU1xuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgV3B4U3dpcGVyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciAkc3dpcGVyQ29udGFpbmVyID0gJChcIi5zd2lwZXItanMtY29udGFpbmVyXCIpLFxuXHQgXHRhbmltRW5kRXYgPSAnd2Via2l0QW5pbWF0aW9uRW5kIGFuaW1hdGlvbmVuZCc7XG5cblxuXHQvLyBNZXRob2RzXG5cblx0ZnVuY3Rpb24gaW5pdCgkdGhpcykge1xuXG5cdFx0Ly8gU3dpcGVyIGVsZW1lbnRzXG5cbiAgICAgICAgdmFyICRlbCA9ICR0aGlzLmZpbmQoJy5zd2lwZXItY29udGFpbmVyJyksXG5cdFx0XHRwYWdpbmF0aW9uID0gJHRoaXMuZmluZCgnLnN3aXBlci1wYWdpbmF0aW9uJyksXG5cdFx0XHRuYXZOZXh0ID0gJHRoaXMuZmluZCgnLnN3aXBlci1idXR0b24tbmV4dCcpLFxuXHRcdFx0bmF2UHJldiA9ICR0aGlzLmZpbmQoJy5zd2lwZXItYnV0dG9uLXByZXYnKTtcblxuXG5cdFx0Ly8gU3dpcGVyIG9wdGlvbnNcblxuICAgICAgICB2YXIgZWZmZWN0ID0gJGVsLmRhdGEoJ3N3aXBlci1lZmZlY3QnKSA/ICRlbC5kYXRhKCdzd2lwZXItZWZmZWN0JykgOiAnc2xpZGUnLFxuICAgICAgICBcdGRpcmVjdGlvbiA9ICRlbC5kYXRhKCdzd2lwZXItZGlyZWN0aW9uJykgPyAkZWwuZGF0YSgnc3dpcGVyLWRpcmVjdGlvbicpIDogICdob3Jpem9udGFsJyxcblx0XHRcdGluaXRpYWxTbGlkZSA9ICRlbC5kYXRhKCdzd2lwZXItaW5pdGlhbC1zbGlkZScpID8gJGVsLmRhdGEoJ3N3aXBlci1pbml0aWFsLXNsaWRlJykgOiAwLFxuXHRcdFx0YXV0b0hlaWdodCA9ICRlbC5kYXRhKCdzd2lwZXItYXV0b2hlaWdodCcpID8gJGVsLmRhdGEoJ3N3aXBlci1hdXRvaGVpZ2h0JykgOiBmYWxzZSxcblx0XHRcdGF1dG9wbGF5ID0gJGVsLmRhdGEoJ3N3aXBlci1hdXRvcGxheScpID8gJGVsLmRhdGEoJ3N3aXBlci1hdXRvcGxheScpIDogZmFsc2UsXG5cdFx0XHRjZW50ZXJlZFNsaWRlcyA9ICRlbC5kYXRhKCdzd2lwZXItY2VudGVyZWQtc2xpZGVzJykgPyAkZWwuZGF0YSgnc3dpcGVyLWNlbnRlcmVkLXNsaWRlcycpIDogZmFsc2U7XG5cblxuXHRcdC8vIEl0ZW1zIHBlciBzbGlkZVxuXG4gICAgICAgIHZhciBpdGVtcyA9ICRlbC5kYXRhKCdzd2lwZXItaXRlbXMnKTtcbiAgICAgICAgdmFyIGl0ZW1zU20gPSAkZWwuZGF0YSgnc3dpcGVyLXNtLWl0ZW1zJyk7XG4gICAgICAgIHZhciBpdGVtc01kID0gJGVsLmRhdGEoJ3N3aXBlci1tZC1pdGVtcycpO1xuICAgICAgICB2YXIgaXRlbXNMZyA9ICRlbC5kYXRhKCdzd2lwZXItbGctaXRlbXMnKTtcblx0XHR2YXIgaXRlbXNYbCA9ICRlbC5kYXRhKCdzd2lwZXIteGwtaXRlbXMnKTtcblxuXG5cdFx0Ly8gU3BhY2UgYmV0d2VlbiBpdGVtc1xuXG4gICAgICAgIHZhciBzcGFjZUJldHdlZW4gPSAkZWwuZGF0YSgnc3dpcGVyLXNwYWNlLWJldHdlZW4nKTtcbiAgICAgICAgdmFyIHNwYWNlQmV0d2VlblNtID0gJGVsLmRhdGEoJ3N3aXBlci1zbS1zcGFjZS1iZXR3ZWVuJyk7XG4gICAgICAgIHZhciBzcGFjZUJldHdlZW5NZCA9ICRlbC5kYXRhKCdzd2lwZXItbWQtc3BhY2UtYmV0d2VlbicpO1xuICAgICAgICB2YXIgc3BhY2VCZXR3ZWVuTGcgPSAkZWwuZGF0YSgnc3dpcGVyLWxnLXNwYWNlLWJldHdlZW4nKTtcblx0XHR2YXIgc3BhY2VCZXR3ZWVuWGwgPSAkZWwuZGF0YSgnc3dpcGVyLXhsLXNwYWNlLWJldHdlZW4nKTtcblxuXG5cdFx0Ly8gU2xpZGVzIHBlciB2aWV3IHdyaXR0ZW4gaW4gZGF0YSBhdHRyaWJ1dGVzIGZvciBhZGFwdGl2ZSByZXNvdXRpb25zXG5cbiAgICAgICAgaXRlbXMgPSBpdGVtcyA/IGl0ZW1zIDogMTtcbiAgICAgICAgaXRlbXNTbSA9IGl0ZW1zU20gPyBpdGVtc1NtIDogaXRlbXM7XG5cdFx0aXRlbXNNZCA9IGl0ZW1zTWQgPyBpdGVtc01kIDogaXRlbXNTbTtcbiAgICAgICAgaXRlbXNMZyA9IGl0ZW1zTGcgPyBpdGVtc0xnIDogaXRlbXNNZDtcbiAgICAgICAgaXRlbXNYbCA9IGl0ZW1zWGwgPyBpdGVtc1hsIDogaXRlbXNMZztcblxuXG4gICAgICAgIC8vIFNwYWNlIGJldHdlZW4gc2xpZGVzIHdyaXR0ZW4gaW4gZGF0YSBhdHRyaWJ1dGVzIGZvciBhZGFwdGl2ZSByZXNvdXRpb25zXG5cbiAgICAgICAgc3BhY2VCZXR3ZWVuID0gIXNwYWNlQmV0d2VlbiA/IDAgOiBzcGFjZUJldHdlZW47XG4gICAgICAgIHNwYWNlQmV0d2VlblNtID0gIXNwYWNlQmV0d2VlblNtID8gc3BhY2VCZXR3ZWVuIDogc3BhY2VCZXR3ZWVuU207XG4gICAgICAgIHNwYWNlQmV0d2Vlbk1kID0gIXNwYWNlQmV0d2Vlbk1kID8gc3BhY2VCZXR3ZWVuU20gOiBzcGFjZUJldHdlZW5NZDtcbiAgICAgICAgc3BhY2VCZXR3ZWVuTGcgPSAhc3BhY2VCZXR3ZWVuTGcgPyBzcGFjZUJldHdlZW5NZCA6IHNwYWNlQmV0d2VlbkxnO1xuXHRcdHNwYWNlQmV0d2VlblhsID0gIXNwYWNlQmV0d2VlblhsID8gc3BhY2VCZXR3ZWVuTGcgOiBzcGFjZUJldHdlZW5YbDtcblxuXHRcdHZhciAkc3dpcGVyID0gbmV3IFN3aXBlcigkZWwsIHtcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICAgICAgICBlbDogcGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmV4dEVsOiBuYXZOZXh0LFxuICAgICAgICAgICAgICAgIHByZXZFbDogbmF2UHJldixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBpdGVtcyxcbiAgICAgICAgICAgIHNwYWNlQmV0d2Vlbjogc3BhY2VCZXR3ZWVuLFxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiBpbml0aWFsU2xpZGUsXG4gICAgICAgICAgICBhdXRvSGVpZ2h0OiBhdXRvSGVpZ2h0LFxuICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGNlbnRlcmVkU2xpZGVzLFxuICAgICAgICAgICAgbW91c2V3aGVlbDogZmFsc2UsXG5cdFx0XHRrZXlib2FyZDoge1xuXHRcdFx0ICAgIGVuYWJsZWQ6IHRydWUsXG5cdFx0XHQgICAgb25seUluVmlld3BvcnQ6IGZhbHNlLFxuXHRcdFx0fSxcbiAgICAgICAgICAgIGdyYWJDdXJzb3I6IHRydWUsXG5cdFx0XHRhdXRvcGxheTogYXV0b3BsYXksXG4gICAgICAgICAgICBlZmZlY3Q6IGVmZmVjdCxcbiAgICAgICAgICAgIGNvdmVyZmxvd0VmZmVjdDoge1xuICAgICAgICAgICAgICAgIHJvdGF0ZTogMTAsXG4gICAgICAgICAgICAgICAgc3RyZXRjaDogMCxcbiAgICAgICAgICAgICAgICBkZXB0aDogNTAsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVTaGFkb3dzOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNwZWVkOiA4MDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgICAgIHByZXZlbnRDbGlja3M6IHRydWUsXG4gICAgICAgICAgICBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxuXHRcdFx0YnJlYWtwb2ludHNJbnZlcnNlOiB0cnVlLFxuXHRcdFx0YnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICA1NzU6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogaXRlbXNTbSxcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuU2xpZGVzOiBzcGFjZUJldHdlZW5TbVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNzY3OiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IGl0ZW1zTWQsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlblNsaWRlczogc3BhY2VCZXR3ZWVuTWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDk5MToge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiBpdGVtc0xnLFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW5TbGlkZXM6IHNwYWNlQmV0d2VlbkxnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMTk5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IGl0ZW1zWGwsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlblNsaWRlczogc3BhY2VCZXR3ZWVuWGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cdFx0Y29uc29sZS5sb2coJHN3aXBlci5wYXJhbXMpO1xuXHR9XG5cblxuXHQvLyBFdmVudHNcblx0JChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCRzd2lwZXJDb250YWluZXIubGVuZ3RoKSB7XG5cdFx0XHQkc3dpcGVyQ29udGFpbmVyLmVhY2goZnVuY3Rpb24oaSwgc3dpcGVyQ29udGFpbmVyKSB7XG5cdFx0XHRcdGluaXQoJChzd2lwZXJDb250YWluZXIpKTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXG5cbn0pKCk7XG5cbi8vXG4vLyBUYWdzIGlucHV0XG4vL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBUYWdzID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vXG5cdC8vIFZhcmlhYmxlc1xuXHQvL1xuXG5cdHZhciAkdGFncyA9ICQoJ1tkYXRhLXRvZ2dsZT1cInRhZ3NcIl0nKTtcblxuXG5cdC8vXG5cdC8vIE1ldGhvZHNcblx0Ly9cblxuXHRmdW5jdGlvbiBpbml0KCR0aGlzKSB7XG5cblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdHRhZ0NsYXNzOiAnYmFkZ2UgYmFkZ2UtcHJpbWFyeSdcblx0XHR9O1xuXG5cdFx0JHRoaXMudGFnc2lucHV0KG9wdGlvbnMpO1xuXHR9XG5cblxuXHQvL1xuXHQvLyBFdmVudHNcblx0Ly9cblxuXHRpZiAoJHRhZ3MubGVuZ3RoKSB7XG5cblx0XHQvLyBJbml0IHNlbGVjdHNcblx0XHQkdGFncy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aW5pdCgkKHRoaXMpKTtcblx0XHR9KTtcblx0fVxuXG59KSgpO1xuXG4vL1xuLy8gVG9vbHRpcFxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgVG9vbHRpcCA9IChmdW5jdGlvbigpIHtcblxuXHQvLyBWYXJpYWJsZXNcblxuXHR2YXIgJHRvb2x0aXAgPSAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJyk7XG5cblxuXHQvLyBNZXRob2RzXG5cblx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHQkdG9vbHRpcC50b29sdGlwKCk7XG5cdH1cblxuXG5cdC8vIEV2ZW50c1xuXG5cdGlmICgkdG9vbHRpcC5sZW5ndGgpIHtcblx0XHRpbml0KCk7XG5cdH1cblxufSkoKTtcblxuLy9cbi8vIFR5cGVkXG4vLyB0ZXh0IHR5cGluZyBhbmltYXRpb25cbi8vXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFR5cGVkID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFZhcmlhYmxlc1xuXG5cdHZhciB0eXBlZCA9ICcudHlwZWQnLFxuXHRcdCR0eXBlZCA9ICQodHlwZWQpO1xuXG5cblx0Ly8gTWV0aG9kc1xuXG5cdGZ1bmN0aW9uIGluaXQoJHRoaXMpIHtcblx0XHR2YXIgZWwgPSAnIycgKyAkdGhpcy5hdHRyKCdpZCcpLFxuICAgICAgICBcdHN0cmluZ3MgPSAkdGhpcy5kYXRhKCd0eXBlLXRoaXMnKSxcblx0XHRcdHN0cmluZ3MgPSBzdHJpbmdzLnNwbGl0KCcsJyk7XG5cblx0XHR2YXIgb3B0aW9ucyA9IHtcblx0XHRcdHN0cmluZ3M6IHN0cmluZ3MsXG4gICAgICAgICAgICB0eXBlU3BlZWQ6IDEwMCxcbiAgICAgICAgICAgIGJhY2tTcGVlZDogNzAsXG4gICAgICAgICAgICBsb29wOiB0cnVlXG5cdFx0fTtcblxuICAgICAgICB2YXIgYW5pbWF0aW9uID0gbmV3IFR5cGVkKGVsLCBvcHRpb25zKTtcblxuXHRcdGluVmlldyhlbCkub24oJ2VudGVyJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRhbmltYXRpb24uc3RhcnQoKTtcblx0XHR9KS5vbignZXhpdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YW5pbWF0aW9uLnN0b3AoKTtcblx0XHR9KTtcblx0fVxuXG5cblx0Ly8gRXZlbnRzXG5cblx0aWYgKCR0eXBlZC5sZW5ndGgpIHtcblx0XHQkdHlwZWQuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGluaXQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblxufSkoKTtcblxuLy9cbi8vIFdhdmlmeVxuLy9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgV2F2aWZ5ID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8vXG5cdC8vIFZhcmlhYmxlc1xuXHQvL1xuXG5cdHZhciAkd2F2aWZ5ID0gJCgnW2RhdGEtdG9nZ2xlPVwid2F2aWZ5XCJdJyk7XG5cblxuXHQvL1xuXHQvLyBNZXRob2RzXG5cdC8vXG5cblx0ZnVuY3Rpb24gaW5pdCgkdGhpcykge1xuXHRcdHZhciAkcGF0aCA9ICR0aGlzLmZpbmQoJ3BhdGgnKTtcblxuXHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0aGVpZ2h0OiA1MCxcbiAgICAgICAgICAgIGJvbmVzOiA1LFxuICAgICAgICAgICAgYW1wbGl0dWRlOiA0MCxcbiAgICAgICAgICAgIHNwZWVkOiAuMTVcblx0XHR9O1xuXG5cdFx0JHBhdGgud2F2aWZ5KG9wdGlvbnMpO1xuXHR9XG5cblxuXHQvL1xuXHQvLyBFdmVudHNcblx0Ly9cblxuXHRpZiAoJHdhdmlmeS5sZW5ndGgpIHtcblxuXHRcdC8vIEluaXQgc2VsZWN0c1xuXHRcdCR3YXZpZnkuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGluaXQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=