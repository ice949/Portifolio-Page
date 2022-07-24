const services = [
    {
      title: 'Web Development',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis praesentium fuga quia, natus voluptates impedit. Excepturi eaque eos, expedita distinctio hic molestiae delectus, ratione neque blanditiis officiis dolores quas eligendi.',
      button: 'ORDER NOW'
    },
    {
      title: 'Web Development',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis praesentium fuga quia, natus voluptates impedit. Excepturi eaque eos, expedita distinctio hic molestiae delectus, ratione neque blanditiis officiis dolores quas eligendi.',
      button: 'ORDER NOW'
    },
    {
      title: 'Web Development',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis praesentium fuga quia, natus voluptates impedit. Excepturi eaque eos, expedita distinctio hic molestiae delectus, ratione neque blanditiis officiis dolores quas eligendi.',
      button: 'ORDER NOW'
    },
  ]
  
  const servicesContainer = document.querySelector('.services');
  
  const creatService = (obj) => {
    const serve = document.createElement('div');
    const heading = document.createElement('h3');
    heading.innerHTML = `${obj.title}`;
    const desc = document.createElement('p');
    desc.innerHTML = `${obj.description}`;
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = `${obj.button} <i class="fa-solid fa-arrow-right-long"></i>`;
    serve.appendChild(heading);
    serve.appendChild(desc);
    serve.appendChild(link);
    servicesContainer.appendChild(serve);
  }

  export { creatService, services }
