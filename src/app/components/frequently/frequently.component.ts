import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-frequently',
  templateUrl: './frequently.component.html',
  styleUrls: ['./frequently.component.css']
})
export class FrequentlyComponent  {
  activeIndex: number | null = null;
 
  faqs = [
    {
      question: 'Why Tech Brilliance?',
      answer:
        'Tech Brilliance Academy offers comprehensive education and skill development, including a 100% Job Guarantee for eligible students.The Academy provides hands-on learning, career guidance, and placement support through its network and partnerships.',
    },
    {
      question: 'What qualifications & admission requirements?',
      answer:
        'Admission requirements and qualifications include enrolling in the specified courses, meeting the minimum performance standards, and adhering to the eligibility criteria outlined for the job guarantee.',
    },
    {
      question: 'What is the duration of the course?',
      answer:
        'The course duration is six months. During this time, students are expected to complete all coursework, projects, and assessments to be eligible for the job guarantee.',
    },
    {
      question: 'What career support services do you offer?',
      answer:
        'Tech Brilliance Academy offers career support, including job placement assistance within six months of course completion, , career guidance, and preparation sessions. The Academy facilitates interviews and placement drives for its students through its network and partnerships.',
    },
    {
      question: 'How do I access course materials & resources?',
      answer:
        'Tech Brilliance Academy provides all necessary course materials and resources as part of the course curriculum. Students are required to complete all assessments, assignments, and projects using these materials.',
    },
  ];
 
  fallbackImage = 'assets/default-placeholder-image.png'; // Define a fallback image
  images = [
    { url: 'assets/Images with Category/Front page 12 images/fs1.JPG', caption: 'Caption 1' },
    { url: 'assets/Images with Category/Front page 12 images/fs2.JPG', caption: 'Caption 2' },
    { url: 'assets/Images with Category/Front page 12 images/fs3.JPG', caption: 'Caption 3' },
    { url: 'assets/Images with Category/Front page 12 images/fs4.JPG', caption: 'Caption 4' },
    { url: 'assets/Images with Category/Front page 12 images/fs5.JPG', caption: 'Caption 5' },
    { url: 'assets/Images with Category/Front page 12 images/fs6.JPG', caption: 'Caption 6' },
    { url: 'assets/Images with Category/Front page 12 images/fs7.JPG', caption: 'Caption 7' },
    { url: 'assets/Images with Category/Front page 12 images/fs8.JPG', caption: 'Caption 8' },
    { url: 'assets/Images with Category/Front page 12 images/fs9.JPG', caption: 'Caption 9' },
    { url: 'assets/Images with Category/Front page 12 images/fs10.JPG', caption: 'Caption 10' },
    { url: 'assets/Images with Category/Front page 12 images/fs11.JPG', caption: 'Caption 11' },
    { url: 'assets/Images with Category/Front page 12 images/fs12.JPG', caption: 'Caption 12' }
  ];
 
  currentIndex = 0;
 
  @ViewChild('carouselInner') carouselInner!: ElementRef;
 
  ngAfterViewInit() {
    this.updateCarouselPosition();
  }
 
  moveSlide(step: number) {
    const totalSlides = this.images.length; // Define totalSlides here
    this.currentIndex = (this.currentIndex + step + totalSlides) % totalSlides;
    this.updateCarouselPosition();
  }
 
  updateCarouselPosition() {
    const carouselItems = this.carouselInner.nativeElement.querySelectorAll('.carousel-item');
    carouselItems.forEach((item: HTMLElement) => {
      item.classList.remove('active', 'left', 'right');
    });
 
    carouselItems[this.currentIndex].classList.add('active');
 
    // Add left and right classes for previous and next images
    const prevIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    const nextIndex = (this.currentIndex + 1) % this.images.length;
 
    carouselItems[prevIndex].classList.add('left');
    carouselItems[nextIndex].classList.add('right');
  }
 
  getVisibleImages() {
    const totalSlides = this.images.length;
    const visibleImages = [];
 
    for (let i = 0; i < 3; i++) {
      const index = (this.currentIndex + i) % totalSlides; // Wrap around using modulo
      visibleImages.push(this.images[index]);
    }
 
    return visibleImages;
  }
  toggleFaq(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}