 $(document).ready(function() {
            $('#fullpage').fullpage({
                verticalCentered: true,
                anchors: ['home', 'portfolio', 'apropos', 'competences', 'contact'],
                menu: '#menu',
                sectionsColor: ['#FBDFDD', '#FFFFFF', '#FBDFDD', '#FFFFFF', '#00A597'],
                scrollBar: true,
                // anchors: ['firstPage', 'secondPage', '3rdPage'],
                scrollingSpeed: 1500,
                controlArrows: false,
                slidesNavigation: true,
                scrollOverflow: false, 
                // scrollOverflow: true,    mettre true pour être trankill avec le scroll auto
                autoscrolling:true,
                fitToSection: true,
                fitToSectionDelay: 999999,
                // normalScrollElements: true,   
                continuousVertical: true,
                normalScrollElements: '.partiedeux',
                // navigation: true,
                // fixedElements: '#header, .footer',
            });
        });






// beige : #FBDFDD
// turquoise : #00A597
// gris clair : #fcfcfc
// gris 2 :#fdfdfd
