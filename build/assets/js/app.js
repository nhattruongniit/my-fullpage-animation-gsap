new fullpage('#fullpage', {
  licenseKey: 'null',
  autoScrolling: true,
  navigation: true,

  onLeave: (origin, destination, direction) => {
    const section = document.querySelector('.s' + destination.index);
    const heading = section.querySelector('h1');
    const timeline = new TimelineMax({ delay: 0.5 });
    timeline.fromTo(
      heading,
      0.5,
      { y: '50', opacity: 0 },
      { y: 0, opacity: 1 }
    );

    if(destination.index === 1) {
      const description = section.querySelector(".description");
      const img1 = section.querySelector('.s1_image1');
      timeline.fromTo(
        description,
        0.5,
        { opacity: 0, y: "50" },
        { y: "0", opacity: 1 }
      )
      timeline.fromTo(
        img1,
        1,
        { opacity: 0 },
        { opacity: 1 },
        
      )
    }
  }
});