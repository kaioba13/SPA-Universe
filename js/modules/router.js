export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname]
    this.changeBg()
  
    
    fetch(route).then(data => data.text()).then(html => {
       document.querySelector('#app').innerHTML = html
    })
  }

  route(event) {
    event = event || window.event
    event.preventDefault();
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
  changeBg() {
    const { pathname } = window.location;
  
    const { body } = document;
  
    switch (pathname) {
      case '/explorer':
        body.className = 'explorer';
        break;
  
      case '/universe':
        body.className = 'universe';
        break;
  
      case '/':
        body.className = 'home';
        break;
  
      default:
        body.className = '';
        break;
    }
  }
}

