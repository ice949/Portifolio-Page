import { creatService, services } from './modules/component';

window.addEventListener('DOMContentLoaded', () => {
  services.forEach(creatService)
  console.log('im working');
});