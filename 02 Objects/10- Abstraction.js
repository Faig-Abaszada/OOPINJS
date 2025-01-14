// 10 - Abstraction
// Mesele sadece bezi property ve methodlarin primave olmamasinin tehlukesinden izah vermekdir
// Novbeti dersde bunun qarshisini almagi gosterecek.
// Hide the details , Show the essentials

function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 0, y: 0 };
  this.computeOptimumLocation = () => {
    console.log("this is the best location");
  };

  this.draw = function draw() {
    this.computeOptimumLocation(); // We define the method and call it in the draw method. THIS MAYBE NOT A GOOD PRACTICE
                                   // Maybe this Method should only be called inside draw method, but now we can call it from outside
                                   // Belelikle biz bu metodun yalniz draw icinde cagrila bilecek shekilde etmek ucun onu kenardan cagrilmasinin
                                   // qarshisini almaliyiq.
    console.log("Draw");
  };
}

const circle = new Circle(10);

// In some situation not all the members should be accessible to the consumer or client of this object.
// For example if we set it to false it is going to completely mess up the object.
circle.computeOptimumLocation = false;

// Maybe the computeOptimumLocation method, and defaultLocation property should be hidden, they could be implementation details, and should be hidden from the consumer of this object
// Suppose we only need to call the computeOptimumLocation from inside the draw method. We will implement this in the next lecture.
