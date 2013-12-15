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
        controlHeaderElement: '.header-hover',
        despElement: '.desp-content',
        pageElement: '.page'
    });

    var initSlides = Gallery.prototype.initSlides,
        addSlide = Gallery.prototype.addSlide,
        resetSlides = Gallery.prototype.resetSlides,
        handleClick = Gallery.prototype.handleClick,
        handleSlide = Gallery.prototype.handleSlide,
        initWidget = Gallery.prototype.initWidget,
        initEventListeners = Gallery.prototype.initEventListeners,
        destroyEventListeners = Gallery.prototype.destroyEventListeners,
        handleClose = Gallery.prototype.handleClose;

    $.extend(Gallery.prototype, {
        initWidget: function() {
            var $container = $(this.options.container);

            this.despElement = $container.find(
                this.options.despElement
            ).first();
            this.page = $container.find(this.options.pageElement).first();
            initWidget.call(this);
        },

        initEventListeners: function() {
            var self = this;

            initEventListeners.call(this);
            this.container.on('mouseenter', self.options.controlHeaderElement, self.proxyListener);
            this.container.on('mouseleave', self.options.controlHeaderElement,  self.proxyListener);

        },
        destroyEventListeners: function() {
            var self = this;

            destroyEventListeners.call(this);
            this.container.off('mouseenter', self.options.controlHeaderElement, self.proxyListener);
            this.container.off('mouseleave', self.options.controlHeaderElement, self.proxyListener);
        },

        onmouseenter: function(event) {
            //this.container.addClass('');
//            var self = this;
//            this.setTimeout(function() {
//                self.container.stop().animate({marginTop: '51px'}, 'fast')
//            }, this.container, 3000)
        },

        onmouseleave: function(event) {
            var self = this;
//            this.setTimeout(function() {
//                self.container.stop().animate({marginTop: '0'}, 'fast')
//            }, this.container, 3000)
        },

        toggleHeader: function() {

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
                $page.html(index + '/' + this.slides.length)
            }
        },

        handleClose: function () {
            handleClose.call(this);
        }

    });

    return Gallery;
}));
