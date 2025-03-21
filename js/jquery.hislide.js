(function($) {

    var slide = function(ele, options) {
        var $ele = $(ele);
        
        var setting = {
            speed: 1000,
            interval: 2000,
        };
        
        $.extend(true, setting, options);

        // Function to detect device type based on window width
        function getDeviceType() {
            if (window.innerWidth <= 768) {
                return 'mobile';
            } else {
                return 'laptop';
            }
        }

        // Define states for laptop and mobile
        var statesLaptop = [
            { $zIndex: 1, width: 270, height: 350, top: 69, left: -200, $opacity: 0 },
            { $zIndex: 2, width: 280, height: 370, top: 59, left: -200, $opacity: 0 },
            { $zIndex: 3, width: 320, height: 418, top: 35, left: -110, $opacity: 0.6 },
            { $zIndex: 4, width: 374, height: 488, top: 0, left: 280, $opacity: 1 },
            { $zIndex: 3, width: 320, height: 418, top: 35, left: 720, $opacity: 0.6 },
            { $zIndex: 2, width: 280, height: 370, top: 59, left: 730, $opacity: 0 },
            { $zIndex: 1, width: 270, height: 350, top: 69, left: 730, $opacity: 0 }
        ];        

        var statesMobile = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 100, $opacity: 0 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 100, $opacity: 0 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 90, $opacity: 0.6 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 280, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 520, $opacity: 0.6 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 530, $opacity: 0 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 530, $opacity: 0 }
        ];

        // Determine which states to use based on device type
        var states = getDeviceType() === 'mobile' ? statesMobile : statesLaptop;

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }

        // Update states on window resize
        $(window).on('resize', function() {
            states = getDeviceType() === 'mobile' ? statesMobile : statesLaptop;
            move();
        });
    }

    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele, options);
        });
        return this;
    }
})(jQuery);
