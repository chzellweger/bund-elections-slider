define('framework/config', ['exports'], function (exports) {

  'use strict';

  var config, currentCustomer, defaultTexts, type;

  defaultTexts = {
    rules: {
      dch: "Wir freuen uns, dass Sie bei uns einen Kommentar abgeben wollen. Ihr Onlinekommentar kann auch auf der Leserbriefseite der gedruckten Zeitung erscheinen. Bitte machen Sie sich vorab mit <a href=\"%rulesLink%\">unseren Kommentarregeln</a> vertraut. Die Redaktion behält sich vor, Beiträge nicht zu publizieren. Dies gilt ganz allgemein, aber insbesondere für ehrverletzende, rassistische, unsachliche, themenfremde Kommentare oder solche in Mundart oder Fremdsprachen. Kommentare mit Fantasienamen oder offensichtlich falschen Namen werden ebenfalls nicht veröffentlicht. Über die Entscheide der Redaktion wird weder Rechenschaft abgelegt, noch Korrespondenz geführt. Die Redaktion behält sich ausserdem vor, Leserkommentare zu kürzen. Bitte nehmen Sie zur Kenntnis, dass Ihre Beiträge auch von Google und anderen Suchmaschinen gefunden werden können und dass die Redaktion nichts unternehmen kann, um einen Kommentar aus dem Suchmaschinenindex zu löschen.",
      wch: "Nous nous réjouissons de votre contribution. Veuillez prendre connaissance des conditions d'utilisation suivantes: La rédaction se réserve le droit de ne pas publier un commentaire, et plus particulièrement pour les termes insultants, racistes, subjectifs ou inappropriés, ainsi que ceux rédigés en langues étrangères. Les commentaires avec des pseudonymes ou des fausses identités ne seront pas non plus publiés. La rédaction n'a pas à rendre de compte ou à communiquer au sujet de ses décisions. Aucune explication ne sera donnée par téléphone. La rédaction se réserve également le droit de raccourcir les commentaires des lecteurs. Veuillez également noter que votre commentaire pourra être indexé par Google et tout autre moteur de recherche. La rédaction ne pourra être tenue pour responsable, tout comme elle ne pourra supprimer un commentaire indexé par un moteur de recherche."
    },
    newest: {
      dch: "Live-Ansicht",
      wch: "En direct"
    },
    newestDescription: {
      dch: "Das Neuste zuerst in der <strong>Live-Ansicht</strong>",
      wch: "<strong>En direct</strong> toute l'actu minute par minute"
    }
  };

  config = {
    configure: function(config) {
      return $.extend(this, config);
    },
    version: window.version = "@@VERSION",
    api: window.api,
    apiUrl: "http://www.derbund.ch/api",
    defaultPathname: "http://www.derbund.ch/fronts/mobile",
    requestTimeout: 5000,
    requestRetries: 10,
    timeoutBetweenRetries: 1000,
    internalConsole: false,
    noNavigation: false,
    noHeader: false,
    initialTransition: true,
    isDebugMode: false,
    isNativeApp: false,
    language: "de",
    commentRules: defaultTexts.rules.dch,
    newest: defaultTexts.newest.dch,
    newestDescription: defaultTexts.newestDescription.dch,
    customers: {
      "24heures": {
        fullName: "24heures",
        shortName: "VQH",
        alternativeName: "24heures",
        language: "fr",
        locale: "fr_FR",
        appleAppId: 380349537,
        wemf: {
          survey: {
            szmvars: "24heures//CP//",
            url: "http://24heures.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/24heures/", "http://24heures.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "24heuresch"
        },
        facebook: {
          pageId: 10150100771335484,
          pageUrl: "https://facebook.com/24heures.ch",
          init: {
            appId: 251285271592561,
            version: "v2.6",
            channelUrl: "http://www.24heures.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        commentRules: defaultTexts.rules.wch,
        newest: defaultTexts.newest.wch,
        newestDescription: defaultTexts.newestDescription.wch
      },
      "bazonline": {
        fullName: "Baslerzeitung",
        shortName: "BaZ",
        alternativeName: "bazonline",
        locale: "de_DE",
        appleAppId: 327214089,
        wemf: {
          survey: {
            szmvars: "baz//CP//",
            url: "http://baz.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/baz/", "http://baz.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "bazonline"
        },
        facebook: {
          pageId: 111236060676,
          pageUrl: "http://www.facebook.com/pages/Basler-Zeitung/111236060676",
          init: {
            appId: 185771024788811,
            version: "v2.6",
            channelUrl: "http://www.bazonline.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        commentRules: "Wir freuen uns, dass Sie bei uns einen Kommentar abgeben wollen. Ihr Onlinekommentar kann auch auf der Leserbriefseite der gedruckten Zeitung (mit Angabe Wohnort) erscheinen. Bitte nehmen Sie vorab folgende Regeln zur Kenntnis: Die Redaktion behält sich vor, Kommentare nicht zu publizieren. Dies gilt ganz allgemein, aber insbesondere für ehrverletzende, rassistische, unsachliche, themenfremde Kommentare oder solche in Mundart oder Fremdsprachen. Kommentare mit Fantasienamen oder mit ganz offensichtlich falschen Namen werden ebenfalls nicht veröffentlicht. Über die Entscheide der Redaktion wird weder Rechenschaft abgelegt, noch Korrespondenz geführt. Telefonische Auskünfte werden keine erteilt. Die Redaktion behält sich ausserdem vor, Leserkommentare online wie in der Printausgabe zu kürzen. Bitte nehmen Sie zur Kenntnis, dass Ihr Kommentar auch von Google und anderen Suchmaschinen gefunden werden kann und dass die Redaktion nichts unternehmen kann und wird, um einen einmal abgegebenen Kommentar aus dem Suchmaschinenindex zu löschen."
      },
      "bernerzeitung": {
        fullName: "Bernerzeitung",
        shortName: "BZ",
        alternativeName: "bernerzeitung",
        locale: "de_DE",
        appleAppId: 327210951,
        wemf: {
          survey: {
            szmvars: "bernerz//CP//",
            url: "http://bernerz.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/bernerz/", "http://bernerz.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "BernerZeitung"
        },
        facebook: {
          pageId: 69474637264,
          pageUrl: "http://www.facebook.com/pages/wwwbernerzeitungch/69474637264",
          init: {
            appId: 151632851557044,
            version: "v2.6",
            channelUrl: "http://www.bernerzeitung.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        newest: "Newsticker",
        newestDescription: "Das Neuste zuerst im <strong>Newsticker</strong>"
      },
      "derbund": {
        fullName: "Der Bund",
        shortName: "B",
        alternativeName: "derbund",
        locale: "de_DE",
        appleAppId: 327212452,
        wemf: {
          survey: {
            szmvars: "derbund//CP//",
            url: "http://derbund.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/derbund/", "http://derbund.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "derbund"
        },
        facebook: {
          pageId: 178913512122277,
          pageUrl: "https://facebook.com/derbundch",
          init: {
            appId: 160395880675799,
            version: "v2.6",
            channelUrl: "http://www.derbund.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        }
      },
      "lematin": {
        fullName: "LeMatin",
        shortName: "LM",
        alternativeName: "lematin",
        language: "fr",
        locale: "fr_FR",
        appleAppId: 307368454,
        wemf: {
          survey: {
            url: "http://lematin.wemfbox.ch/2004/01/survey.js",
            szmvars: "lematin//CP//"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/lematin/", "http://lematin.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "lematinch"
        },
        facebook: {
          pageId: 107915992569379,
          pageUrl: "https://www.facebook.com/lematin.ch",
          init: {
            appId: 188734271214193,
            version: "v2.6",
            channelUrl: "http://www.tagesanzeiger.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        commentRules: defaultTexts.rules.wch,
        newest: defaultTexts.newest.wch,
        newestDescription: defaultTexts.newestDescription.wch
      },
      "tagesanzeiger": {
        fullName: "Tages-Anzeiger",
        shortName: "TA",
        alternativeName: "tagesanzeiger",
        locale: "de_DE",
        appleAppId: 322823380,
        wemf: {
          survey: {
            url: "http://tagesanz.wemfbox.ch/2004/01/survey.js",
            szmvars: "tagesanz//CP//"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/tagesanz/", "http://tagesanz.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "tagesanzeiger"
        },
        facebook: {
          pageId: 177194474660,
          pageUrl: "https://facebook.com/Tagesanzeiger",
          init: {
            appId: 147124108642216,
            version: "v2.6",
            channelUrl: "http://www.tagesanzeiger.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        }
      },
      "tdg": {
        fullName: "Tribune de Genéve",
        shortName: "TDG",
        alternativeName: "tdg",
        language: "fr",
        locale: "fr_FR",
        appleAppId: 380351338,
        twitter: {
          accountName: "tdggeneve"
        },
        wemf: {
          survey: {
            url: "http://tdg.wemfbox.ch/2004/01/survey.js",
            szmvars: "tdg//CP//"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/tdg/", "http://tdg.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        facebook: {
          pageId: 105188432853984,
          pageUrl: "https://facebook.com/tdg.ch",
          init: {
            appId: 222318267841285,
            version: "v2.6",
            channelUrl: "http://www.derbund.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        commentRules: defaultTexts.rules.wch,
        newest: defaultTexts.newest.wch,
        newestDescription: defaultTexts.newestDescription.wch
      },
      "zsz": {
        fullName: "Zürichsee-Zeitung",
        shortName: "ZSZ",
        alternativeName: "zsz",
        locale: "de_DE",
        twitter: {
          accountName: "ZSZonline"
        },
        facebook: {
          pageId: 385968291506847,
          pageUrl: "https://www.facebook.com/pages/Z%C3%BCrichsee-Zeitung/385968291506847",
          init: {
            appId: 1538332599783320,
            version: "v2.6",
            channelUrl: "http://www.zsz.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        wemf: {
          survey: {
            url: "http://zsz.wemfbox.ch/2004/01/survey.js",
            szmvars: "zsz//CP//"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/zsz/", "http://zsz.wemfbox.ch/cgi-bin/ivw/CP/"]
        }
      },
      "landbote": {
        fullName: "Landbote",
        shortName: "LB",
        alternativeName: "landbote",
        locale: "de_DE",
        twitter: {
          accountName: "landbote"
        },
        facebook: {
          pageId: 145683188797207,
          pageUrl: "https://www.facebook.com/landbote",
          init: {
            appId: 738531732909881,
            version: "v2.6",
            channelUrl: "http://www.landbote.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        wemf: {
          survey: {
            url: "http://winti.wemfbox.ch/2004/01/survey.js",
            szmvars: "winti//CP//"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/winti/", "http://winti.wemfbox.ch/cgi-bin/ivw/CP/"]
        }
      },
      "zuonline": {
        fullName: "Zürcher Unterländer",
        shortName: "ZU",
        alternativeName: "zuonline",
        locale: "de_DE",
        twitter: {
          accountName: "ZUnterland"
        },
        facebook: {
          pageId: 588623241193743,
          pageUrl: "https://www.facebook.com/pages/Z%C3%BCrcher-Unterl%C3%A4nder/588623241193743",
          init: {
            appId: 900877159943131,
            version: "v2.6",
            channelUrl: "http://www.zuonline.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        wemf: {
          survey: {
            url: "http://zuonline.wemfbox.ch/2004/01/survey.js",
            szmvars: "zuonline//CP//"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/zuonline/", "http://zuonline.wemfbox.ch/cgi-bin/ivw/CP/"]
        }
      },
      "berneroberlaender": {
        fullName: "Berner Oberländer",
        shortName: "BO",
        alternativeName: "berneroberlaender",
        locale: "de_DE",
        appleAppId: 994154918,
        wemf: {
          survey: {
            szmvars: "bernerz//CP//",
            url: "http://bernerz.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/bernerz/", "http://bernerz.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "BernerZeitung"
        },
        facebook: {
          pageId: 69474637264,
          pageUrl: "http://www.facebook.com/pages/wwwbernerzeitungch/69474637264",
          init: {
            appId: 151632851557044,
            version: "v2.6",
            channelUrl: "http://www.bernerzeitung.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        newest: "Newsticker",
        newestDescription: "Das Neuste zuerst im <strong>Newsticker</strong>"
      },
      "thunertagblatt": {
        fullName: "Thuner Tagblatt",
        shortName: "TT",
        alternativeName: "thunertagblatt",
        locale: "de_DE",
        wemf: {
          survey: {
            szmvars: "bernerz//CP//",
            url: "http://bernerz.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/bernerz/", "http://bernerz.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "BernerZeitung"
        },
        facebook: {
          pageId: 69474637264,
          pageUrl: "http://www.facebook.com/pages/wwwbernerzeitungch/69474637264",
          init: {
            appId: 151632851557044,
            version: "v2.6",
            channelUrl: "http://www.bernerzeitung.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        newest: "Newsticker",
        newestDescription: "Das Neuste zuerst im <strong>Newsticker</strong>"
      },
      "langenthalertagblatt": {
        fullName: "Langenthaler Tagblatt",
        shortName: "LT",
        alternativeName: "langenthalertagblatt",
        locale: "de_DE",
        appleAppId: 994154247,
        wemf: {
          survey: {
            szmvars: "bernerz//CP//",
            url: "http://bernerz.wemfbox.ch/2004/01/survey.js"
          },
          nn1: ["http://newsnetz.wemfbox.ch/cgi-bin/ivw/CP/bernerz/", "http://bernerz.wemfbox.ch/cgi-bin/ivw/CP/"]
        },
        twitter: {
          accountName: "BernerZeitung"
        },
        facebook: {
          pageId: 69474637264,
          pageUrl: "http://www.facebook.com/pages/wwwbernerzeitungch/69474637264",
          init: {
            appId: 151632851557044,
            version: "v2.6",
            channelUrl: "http://www.bernerzeitung.ch/channel.html",
            status: true,
            cookie: true,
            xfbml: true
          },
          login: {
            scope: "publish_actions,user_likes"
          }
        },
        newest: "Newsticker",
        newestDescription: "Das Neuste zuerst im <strong>Newsticker</strong>"
      },
      "12app": {
        shortName: "BOA",
        alternativeName: "12app",
        language: "de",
        locale: "de_DE",
        appleAppId: 985919437,
        productWebsite: "http://www.12app.ch/",
        itunesAppStoreUrl: "https://itunes.apple.com/us/app/12-app/id985919437?l=de&ls=1&mt=8",
        googlePlayStoreUrl: "https://play.google.com/store/apps/details?id=ch.iagentur.i12app",
        twitter: {
          accountName: null
        },
        facebook: {
          init: {
            appId: 107213792968618,
            version: "v2.6",
            xfbml: true
          }
        },
        commentRules: defaultTexts.rules.dch,
        newest: defaultTexts.newest.dch,
        newestDescription: defaultTexts.newestDescription.dch
      }
    },
    paywall: {
      enabled: true,
      status: {
        enabled: 2,
        trackOnly: 1,
        disabled: 0
      },
      templateSets: "http://%subdomain%.%currentCustomer%.ch/cre-1.0/cockpit/platform/tamedia/shop/%alternativeName%/api/templatesets.js",
      templateClient: "http://%subdomain%.%currentCustomer%.ch/cre-1.0/static/tracking/1.0/templateclient.js",
      tracking: "http://%subdomain%.%currentCustomer%.ch/cre-1.0/tracking/tracking.js",
      logout: "https://%subdomain%.tamedia.ch/tamstorefront/logoutOnLead",
      abo: "http://%subdomain%.%currentCustomer%.ch",
      myAccount: "https://%subdomain%.%currentCustomer%.ch/tamstorefront/my-account"
    }
  };

  $.extend(config, window.configOverrides);

  if (navigator.userAgent.indexOf("app-ios-smartphone") > -1 || navigator.userAgent.indexOf("app-android-smartphone") > -1) {
    config.isNativeApp = true;
    config.noHeader = true;
    config.paywall.enabled = false;
    type = navigator.userAgent.substr(navigator.userAgent.lastIndexOf("-") + 1, navigator.userAgent.length);
    switch (type) {
      case "3":
        config.noHeader = false;
        config.noNavigation = true;
    }
  }

  config.currentCustomer = currentCustomer = window.location.hostname.split(".").reverse()[1];

  if (!config.customers[currentCustomer]) {
    currentCustomer = config.currentCustomer = window.defaultCustomer;
  }

  $.extend(config, config.customers[currentCustomer]);

  config.isProduction = (function() {
    if (config.env === "mobile") {
      return window.location.hostname.toLowerCase().indexOf("mobile2") > -1;
    } else {
      return ["localhost", "dev", "staging", "paywall"].every(function(value) {
        return window.location.hostname.toLowerCase().indexOf(value) < 0;
      });
    }
  })();

  exports.config = config;

});