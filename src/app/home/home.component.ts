import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.triggerAnimations();
  }

  private triggerAnimations(): void {
    // Use setTimeout to ensure DOM is ready
    setTimeout(() => {
      const elements = [
        '.hero-content',
        '.hero-subtitle',
        '.hero-title',
        '.hero-description',
        '.hero-buttons'
      ];

      elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
          // Stagger the animations
          setTimeout(() => {
            element.classList.add('animate');
          }, index * 200);
        }
      });
    }, 100);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
