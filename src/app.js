import { LightningElement } from "lwc";

export default class App extends LightningElement {
  emojiActive(evt) {
    evt.currentTarget.classList.toggle("active");
  }

  home(evt) {
    this.template.querySelector('.c-home').classList.remove('slds-hide');
    this.template.querySelector("."+evt.currentTarget.dataset.source).classList.add('slds-hide');
  }

  homeAlerts(evt) {
    this.template.querySelector('.c-home-alerts').classList.remove('slds-hide');
    this.template.querySelector("."+evt.currentTarget.dataset.source).classList.add('slds-hide');
  }

  homePm(evt) {
    this.template.querySelector('.c-home-pm').classList.remove('slds-hide');
    this.template.querySelector("."+evt.currentTarget.dataset.source).classList.add('slds-hide');
  }

  pumps() {
    this.template.querySelector('.c-home').classList.add('slds-hide');
    this.template.querySelector('.c-pumps').classList.remove('slds-hide');
  }

  pumpsAction() {
    this.template.querySelector('.c-pumps').classList.add('slds-hide');
    this.template.querySelector('.c-pumps-action').classList.remove('slds-hide');
  }


  oilDiff() {
    this.template.querySelector('.c-home-alerts').classList.add('slds-hide');
    this.template.querySelector('.c-oil-diff').classList.remove('slds-hide');
  }

  oilDiffNoti() {
    this.template.querySelector('.c-oil-diff').classList.add('slds-hide');
    this.template.querySelector('.c-oil-diff-g').classList.remove('slds-hide');
  }

  oilDiffG() {
    this.template.querySelector('.c-oil-diff-g').classList.add('slds-hide');
    this.template.querySelector('.c-oil-diff-g-b').classList.remove('slds-hide');
    
  }


  homePmPd() {
    this.template.querySelector('.c-home-pm').classList.add('slds-hide');
    this.template.querySelector('.c-home-pm-pd').classList.remove('slds-hide');
  }

  homePmPdB () {
    this.template.querySelector('.c-home-pm-pd').classList.add('slds-hide');
    this.template.querySelector('.c-home-pm-pd-b').classList.remove('slds-hide');
  }
}
