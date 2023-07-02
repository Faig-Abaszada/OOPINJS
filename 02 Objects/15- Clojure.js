// Nedir , deqiq arashdir.

function Circle(radius) {
  let color = "red";
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = (factor) => {
    // ..
  };

  this.draw = function draw() {
    // Burada computeOptimumLocation metodunu cagiririq direkt olaraq
    // Ve bu ishleyir cunki jsin bu konsept ucun clojure var.
    /*
      Clojure nedir izah getirek.
      Circle adinda funksiyamiz var ve bu funksiyanin icinde diger draw funksiyasi var.
      Ve bu Draw funksiyasinin icinde deysikenler yarada bilerik:
      let x, y; -< ve bu local deyiskenler yalniz bu funksyiyanin icinde accesibledir.
      Yani scope bu funksiyayay limitlidir. Ve ne vaxtki biz bu funskyani calisdirib bitirdik
      x ve y əhatə dairəsindən çıxacaq ve itecek.
      Scop-un eksine bizim clojure-lar vardir.
      Clojure inner funksiyanin hansi deyiskenlere accesi olacagini teyin edir .
      Meselen burdaki inner funskiya icindeki butun local deyiskenlere ve icinde oldugu diger
      funksiyanin( parent ) deyisklenlerie accesi var.

      Scope ile Clojure cetine dushmeyin cunki
      scope muveqqetidir ve olur ,

      Ve her defe draw metodunu cagiranda local deyiskenler recreated ve reinitialized olur .
      ve bu funksiya bitdikden sonra olur.

      Belelikle scope muveqqtidir.
      Lakin Clojure orada qalir.
      ne vaxtki draw funk cagrilir ve bu funk bitdikden sonra
       prentdeki deyiskenler yaddasda qalmaga davam edir.
       They will preserve their state, because they are part of the closure of this draw function.
       Onlar oz statelerini qoruyacaqlar cunki onlar draw funksiyasinin clojure hissesidir.

     */
    computeOptimumLocation(0.1);

    console.log("Draw");
  };
}
const myCircle = new Circle(10);
