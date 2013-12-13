/*
 * blueimp Gallery Indicator JS 1.1.0
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            './blueimp-helper',
            './blueimp-gallery'
        ], factory);
    } else {
        // Browser globals:
        factory(
            window.blueimp.helper || window.jQuery,
            window.blueimp.Gallery
        );
    }
}(function ($, Gallery) {
    'use strict';

    $.extend(Gallery.prototype.options, {
        despElement: '.desp-content',
        pageElement: '.page'
    });

    var initSlides = Gallery.prototype.initSlides,
        addSlide = Gallery.prototype.addSlide,
        resetSlides = Gallery.prototype.resetSlides,
        handleClick = Gallery.prototype.handleClick,
        handleSlide = Gallery.prototype.handleSlide,
        initWidget = Gallery.prototype.initWidget,
        handleClose = Gallery.prototype.handleClose;

    $.extend(Gallery.prototype, {
        initWidget: function() {
            var $container = $(this.options.container);
            this.despElement = $container.find(
                this.options.despElement
            ).first();
            this.page = $container.find(this.options.pageElement).first();
            console.log($container)
            initWidget.call(this);
        },

        initSlides: function (reload) {
            initSlides.call(this, reload);
        },

        handleClick: function (event) {
            return handleClick.call(this, event)
        },

        handleSlide: function (index) {
            handleSlide.call(this, index);
            this.setPage(index);
            this.setDescription(index);
        },

        // 显示图片描述
        setDescription: function(index) {
            var desp = this.slides[index].firstChild.description;
            var despElement = this.despElement;
            if (despElement.length) {
                this.despElement.empty();
                if (desp) {
                    despElement[0].appendChild(desp);
                }
            }
        },

        // 显示图片页数
        setPage: function(index) {
            var $page = this.page;
            console.log(index + '/' + this.slides.length)
            if ($page.length) {
                this.page.html(index + '/' + this.slides.length)
            }
        },

        handleClose: function () {
            handleClose.call(this);
        }

    });

    return Gallery;
}));
