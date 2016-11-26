define('framework/handlebars/module', ['exports', 'framework/utils', 'framework/translations'], function (exports, utils, translations) {

  'use strict';

  var handlebars, module;

  module = {};

  module.config = null;

  handlebars = {
    configure: function(config) {
      return module.config = config;
    },
    init: function() {
      Handlebars.registerHelper("tamediaIcon", function(value, options) {
        return new Handlebars.SafeString('<span class="NnIcon ' + value + 'Icon"></span>');
      });
      Handlebars.registerHelper("generatePictureCaption", function(picture, options) {
        var annotation, annotation_type_text;
        annotation = "";
        if (picture.photographer || picture.provider) {
          annotation_type_text = (function() {
            switch (picture.annotation_type) {
              case "picture":
                return translations.translations.translate("Bild");
              case "video":
                return translations.translations.translate("Video");
              default:
                return "";
            }
          })();
          annotation += " ";
          if (picture.annotation_type) {
            annotation += annotation_type_text + ": ";
          }
          if (picture.photographer) {
            annotation += picture.photographer;
          }
          if (picture.photographer && picture.provider) {
            annotation += "/";
          }
          if (picture.provider) {
            annotation += picture.provider;
          }
        }
        return (picture.title ? "<b>" + picture.title + "</b>" : "") + picture.caption + (annotation ? "<span class=\"annotation\">" + annotation + "</span>" : "");
      });
      Handlebars.registerHelper("isCategoryLink", function(options) {
        if (this.linked_object_type === "category") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isWeatherLink", function(options) {
        if (this.linked_object_type === "weather") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isCommunityTypeComment", function(options) {
        if (this.type === "comment") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isCommunityTypeFacebook", function(options) {
        if (this.type === "facebook") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isCommunityTypeTwitter", function(options) {
        if (this.type === "twitter") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("times", function(n, options) {
        var accum, i;
        accum = "";
        i = 0;
        while (i < n) {
          accum += options.fn(i);
          ++i;
        }
        return accum;
      });
      Handlebars.registerHelper("isCommentingAllowed", function(commentsCommunity, options) {
        if (utils.utils.isCommentingAllowed(commentsCommunity.allow_comments_weekdays, commentsCommunity.allow_comments_weekends)) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("unlessMaxDepth", function(options) {
        if (this.depth < 3) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("stripAndTrimHtml", function(text) {
        var shortenedText, strippedText;
        if (text == null) {
          text = "";
        }
        strippedText = text.replace(/<[^>]+>/g, "");
        shortenedText = strippedText.substr(0, 85);
        if (/^\S/.test(strippedText.substr(85))) {
          shortenedText = shortenedText.replace(/\s+\S*$/, "");
        }
        return shortenedText + "...";
      });
      Handlebars.registerHelper("linkTo", function(url, options) {
        var attrs, key, ref, value;
        attrs = [];
        ref = options.hash;
        for (key in ref) {
          value = ref[key];
          if (url.indexOf(key) < 0 && ["href", "data-isLinkTo"].indexOf(key) < 0) {
            attrs.push(key + "=\"" + value + "\"");
          } else {
            url = url.replace(new RegExp("%" + key + "%"), value);
          }
        }
        if (!history.pushState) {
          url = "#" + url;
        }
        return "<a href=\"" + url + "\" data-isLinkTo=\"true\" " + (attrs.join(" ")) + ">" + (options.fn(this)) + "</a>";
      });
      Handlebars.registerHelper("stripHtml", function(text) {
        return utils.utils.stripHtml(text);
      });
      Handlebars.registerHelper("isSupportedBoxtype", function(options) {
        if (["articles", "slideshow", "picture", "video", "youtube", "info", "link", "chartMap", "chart", "livevideo", "picturevoting", "quiz", "iframe", "stock_exchange_chart", "poll"].indexOf(this.boxtype) >= 0) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("displayMediaType", function(options) {
        if (["slideshow", "video"].indexOf(this.mediatype) > -1) {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isBreakingNewsArticlesBox", function(options) {
        if (this.boxtype === "articles" && this.layout_type === "breaking-news") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isArticlesBox", function(options) {
        if (this.boxtype === "articles" && this.layout_type !== "breaking-news" && this.layout_type !== "horizontal-slide") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isSlideshowOverviewBox", function(value) {
        if (this.boxtype === "slideshowoverview" || this.layout_type === "horizontal-slide") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isMeteonewsBox", function(value) {
        if (this.boxtype === "meteonews") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isMeteonewsBoxLM", function(value) {
        if (this.boxtype === "meteonewsLM") {
          return value.fn(this);
        } else {
          return vlaue.inverse(this);
        }
      });
      Handlebars.registerHelper("isSlideshowElement", function(value) {
        if (this.type === "element_slideshow") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isSlideshowBox", function(value) {
        var ref, ref1;
        if (this.boxtype === "slideshow" && (((ref = this.slideshow) != null ? (ref1 = ref.pictures) != null ? ref1.length : void 0 : void 0) != null) && this.slideshow.pictures.length > 0) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isPictureElement", function(value) {
        if (this.type === "element_picture") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isPictureBox", function(value) {
        if (this.boxtype === "picture") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isVideoElement", function(value) {
        if (this.type === "element_video") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isVideoBox", function(value) {
        if (this.boxtype === "video") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isAudioBox", function(value) {
        if (this.boxtype === "audio") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isYouTubeBox", function(value) {
        if (this.boxtype === "youtube") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isInfoBox", function(value) {
        if (this.boxtype === "info") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLinkBox", function(value) {
        if (this.boxtype === "link") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isHtmlElement", function(value) {
        if (this.type === "element_html") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isChartMap", function(value) {
        if (this.type === "element_chart_map" || this.type === "element_chart") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isChartMapBox", function(value) {
        if (this.boxtype === "chartMap") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isChartBox", function(value) {
        if (this.boxtype === "chart") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isStockExchangeChartBox", function(value) {
        if (this.boxtype === "stock_exchange_chart") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLiveStreamBox", function(value) {
        if (this.boxtype === "livevideo") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLiveticker", function(value) {
        if (this.liveticker_id) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isPictureVotingBox", function(value) {
        if (this.boxtype === "picturevoting") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isQuizBox", function(value) {
        if (this.boxtype === "quiz") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isIframeElement", function(value) {
        if (this.type === "element_iframe") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isIframeBox", function(value) {
        if (this.boxtype === "iframe") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isIframeBoxMap", function(value) {
        if (this.boxtype === "iframe" && (this.iframe_class_name === "chart" || this.iframe_class_name === "map")) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isPollElement", function(value) {
        if (this.type === "element_poll") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isPollBox", function(value) {
        if (this.boxtype === "poll") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isTagsBox", function(value) {
        if (this.boxtype === "tags") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isBlogsBox", function(value) {
        if (this.boxtype === "blogs") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isNewsletterSubscriptionBox", function(value) {
        if (this.boxtype === "newsletter") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("hasIframeHeight", function(value) {
        if (this.iframe_class_name === "chart" || this.iframe_class_name === "fixed_height" || this.iframe_class_name === "map") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isNavigationTypeTitle", function(value) {
        if (this.navigation_type === "title") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isNavigationTypeCategory", function(value) {
        if (this.navigation_type === "category") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isString", function(object, value) {
        if (typeof object === "string") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isWertend", function(value) {
        if (typeof this !== "undefined" && this !== null) {
          if (this.layout_type === "analyse" || this.layout_type === "analyse_wide") {
            return value.fn(this);
          } else {
            return value.inverse(this);
          }
        }
      });
      Handlebars.registerHelper("isLeadDecoration", function(value) {
        if ((typeof this !== "undefined" && this !== null) && (this.decoration != null) && this.decoration.position === "lead") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isTopDecoration", function(value) {
        if ((typeof this !== "undefined" && this !== null) && (this.decoration != null) && this.decoration.position === "top") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isBottomDecoration", function(value) {
        if ((typeof this !== "undefined" && this !== null) && (this.decoration != null) && this.decoration.position === "bottom") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("translate", function(key) {
        return translations.translations.translate(key);
      });
      Handlebars.registerHelper("appifyUrl", function(url, urlParams) {
        if (url != null) {
          url += (url.indexOf("?") >= 0 ? "&" : "?") + "appId=" + module.config.appId;
          return url + (urlParams != null ? "&" + urlParams : "");
        } else {
          return "";
        }
      });
      Handlebars.registerHelper("isPublireportage", function(value) {
        if (typeof this !== "undefined" && this !== null) {
          if (this.layout_type === "publireportage") {
            return value.fn(this);
          } else {
            return value.inverse(this);
          }
        }
      });
      Handlebars.registerHelper("isExternalArticle", function(value) {
        if (typeof this !== "undefined" && this !== null) {
          if (this.layout_type === "link") {
            return value.fn(this);
          } else {
            return value.inverse(this);
          }
        }
      });
      Handlebars.registerHelper("isTeaser", function(value) {
        switch (this.layout_type) {
          case "link_wide":
          case "link_wide_extended":
          case "category":
          case "quote":
          case "html_teaser":
            return value.inverse(this);
          default:
            return value.fn(this);
        }
      });
      Handlebars.registerHelper("isTeaserWide", function(value) {
        if (this.layout_type === "link_wide") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isTeaserWideExtended", function(value) {
        if (this.layout_type === "link_wide_extended") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isTeaserCollection", function(value) {
        if (this.layout_type === "category") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isTeaserQuote", function(value) {
        if (this.layout_type === "quote") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isTeaserHtml", function(value) {
        if (this.layout_type === "html_teaser") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLayoutTypeCategory", function(options) {
        if (this.layout_type === "category") {
          return options.fn(this);
        } else {
          return options.inverse(this);
        }
      });
      Handlebars.registerHelper("isLayoutTypeSlideshow", function(value) {
        if (this.layout_type === "slideshow") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLayoutTypeListicle", function(value) {
        if (this.layout_type === "listicle") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLayoutTypeStoryBundle", function(value) {
        if (this.pageElementLayoutType === "storybundle") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLayoutTypeCollection", function(value) {
        if (this.pageElementLayoutType === "collection") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("toTwoDecimals", function(value) {
        if (value != null) {
          return value.toFixed(2);
        }
      });
      Handlebars.registerHelper("getPageElementLink", function() {
        switch (this.linked_object_type) {
          case "category":
            return "/categories/" + this.linked_object_id;
          case "weather":
            return "/weather";
          default:
            return "javascript:void(0);";
        }
      });
      Handlebars.registerHelper("getStockPerformanceColor", function(value) {
        if (value > 0) {
          return "green";
        } else if (value < 0) {
          return "red";
        } else {
          return "gray";
        }
      });
      Handlebars.registerHelper("join", function(array, key) {
        return array.map(function(el) {
          return el[key];
        }).join(", ");
      });
      Handlebars.registerHelper("getCustomerShortName", function() {
        return module.config.shortName;
      });
      Handlebars.registerHelper("isLematin", function(value) {
        if (module.config.shortName === "LM") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isLematinCategorySlider", function(value) {
        if (location.pathname.length === 1 && module.config.shortName === "LM" && this.linked_object_type === "category" && this.layout_type !== "publireportage") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("getProductWebsite", function() {
        return module.config.productWebsite;
      });
      Handlebars.registerHelper("getItunesAppStoreUrl", function() {
        return module.config.itunesAppStoreUrl + "&utm_source=sharingpage&utm_medium=" + module.config.env + "&utm_campaign=standard";
      });
      Handlebars.registerHelper("getGooglePlayStoreUrl", function() {
        return module.config.googlePlayStoreUrl + "&utm_source=sharingpage&utm_medium=" + module.config.env + "&utm_campaign=standard";
      });
      Handlebars.registerHelper("getFromLocalStorage", function(key) {
        try {
          return localStorage.getItem(key);
        } catch (_error) {}
      });
      Handlebars.registerHelper("getTime", function() {
        var date, minutes;
        date = new Date();
        minutes = date.getMinutes();
        if (minutes.toString().length === 1) {
          minutes = "0" + minutes;
        }
        return (date.getHours()) + ":" + minutes;
      });
      Handlebars.registerHelper("getTimestamp", function() {
        return Math.round(new Date().getTime() / 1000);
      });
      Handlebars.registerHelper("isInternalUrl", function(value) {
        if (this.navigation_type === "internal_url") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isWeatherPath", function(value) {
        if (this.path === "weather") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isFrontPath", function(value) {
        if (this.path === "") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("formatMeteonewsDay", function(timestamp) {
        var days;
        days = ["Sa", "So", "Mo", "Di", "Mi", "Do", "Fr"];
        return translations.translations.translate(days[new Date(timestamp).getDay()]);
      });
      Handlebars.registerHelper("formatDate", function(timestamp) {
        return utils.utils.date.format(timestamp);
      });
      Handlebars.registerHelper("formatDateShort", function(timestamp) {
        return utils.utils.date.formatShort(timestamp);
      });
      Handlebars.registerHelper("formatTime", function(timestamp) {
        return utils.utils.date.formatTime(timestamp);
      });
      Handlebars.registerHelper("isPaywallEnabled", function(value) {
        if (this.site.paywall_status === module.config.paywall.status.enabled && module.config.paywall.enabled) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isDch", function(value) {
        if (utils.utils.isDch()) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isDebugMode", function(value) {
        if (module.config.isDebugMode) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("unlessReleasedAndHasNoChildren", function(value) {
        if (typeof this === "function" ? this((typeof released !== "undefined" && released !== null) && this.released === false && this.children.length === 0) : void 0) {
          return value.inverse(this);
        } else {
          return value.fn(this);
        }
      });
      Handlebars.registerHelper("calculatePercent", function(value, total) {
        var newValue;
        newValue = value / total * 10;
        return Math.round(newValue * 100) / 10;
      });
      Handlebars.registerHelper("isSVGSupported", function(value) {
        if (document.createElement("svg").getAttributeNS) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isFirst", function(index, value) {
        if (index === 0) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isEmptyArticle", function(value) {
        if (!(this.timestamp_updated_at === 0 && this.title === null)) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("getArticlesCount", function() {
        return this.articles.filter(function(item) {
          return item.layout_type === "article";
        }).length;
      });
      Handlebars.registerHelper("getChannel", function() {
        if (this.video.channel != null) {
          return this.video.channel.toLowerCase();
        } else {
          return "mobile";
        }
      });
      Handlebars.registerHelper("isFooter", function(value) {
        if (this.type === "footer") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isDropdownMenu", function(value) {
        if (this.name === "Mehr") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("limit", function(arr, limit) {
        if (arr != null) {
          return arr.slice(0, limit);
        }
      });
      Handlebars.registerHelper("getMediaIcon", function() {
        if (this.mediatype === "picture" || this.mediatype === "iframe") {
          return "arrowRight";
        } else if (this.mediatype === "zattoo") {
          return "video";
        } else {
          return this.mediatype;
        }
      });
      Handlebars.registerHelper("getFirstListicleTitle", function(value) {
        var element, j, len, ref, results;
        if ((this.inline_elements != null) && this.inline_elements.length > 0) {
          ref = this.inline_elements;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            element = ref[j];
            if (element.boxtype === "element") {
              if (element.element.type === "element_listicle") {
                results.push(element.element.title);
              } else {
                results.push(void 0);
              }
            } else {
              results.push(void 0);
            }
          }
          return results;
        }
      });
      Handlebars.registerHelper("isShareElement", function(value) {
        if (this.type === "element_share") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isNavigationActive", function(value) {
        if (this.navigation_visibility !== 0) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("isNavigationExpanded", function(value) {
        if (this.navigation_visibility === 2) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("showCardCount", function(index, value) {
        return (++index) + "/" + value.length;
      });
      Handlebars.registerHelper("isIndex", function(curIndex, index, value) {
        if (curIndex + 1 === index) {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerHelper("hasPremiumDecoration", function(value) {
        var ref, ref1;
        if (module.config.shortName === "LM" || module.config.shortName === "BaZ") {
          return;
        }
        if ((typeof this !== "undefined" && this !== null) && ((ref = this.external_services) != null ? (ref1 = ref.paywall) != null ? ref1.doc_type : void 0 : void 0) === "premium") {
          return value.fn(this);
        } else {
          return value.inverse(this);
        }
      });
      Handlebars.registerPartial("loader", function(context) {
        return require("framework/loader/loader")["default"](context);
      });
      Handlebars.registerPartial("dialog", function(context) {
        return require("framework/dialog/templates/dialog")["default"](context);
      });
      Handlebars.registerPartial("fullscreenLoader", function(context) {
        return require("framework/loader/fullscreenLoader")["default"](context);
      });
      Handlebars.registerPartial("cards", function(context) {
        return require("framework/listicles/templates/cards")["default"](context);
      });
      Handlebars.registerPartial("element", function(context) {
        return require("framework/listicles/templates/element")["default"](context);
      });
      return Handlebars.registerPartial("navigation", function(context) {
        return require("framework/listicles/templates/navigation")["default"](context);
      });
    }
  };

  exports.handlebars = handlebars;

});