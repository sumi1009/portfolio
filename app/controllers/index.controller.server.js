


export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home'} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about'} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects'} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services'} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact'} );
};

export function submitInfo(req, res, next){
    console.log(req.body);
    res.render('index', { title: 'Home', page: 'home'})
}




