import react from "./assets/atom.png";
import ci from "./assets/ci.jpeg";
import tensor from "./assets/tensor.jpeg";
import flutter from "./assets/flutter.jpeg";
import aws from "./assets/aws.jpeg";
import fire from "./assets/fire.jpeg";
import mongo from "./assets/mongo.jpeg";
import sql from "./assets/sql.jpeg";
import django from "./assets/django.jpeg";
import next from "./assets/next.jpeg";
import node from "./assets/node.jpeg";
import docker from "./assets/docker.png";
import css from "./assets/css.jpeg";

export default function Technologies() {
  const logos = [react, ci, node, tensor, flutter, aws, django, docker, fire, mongo, sql, css, next];

  return (
    <section className="py-10 flex flex-col items-center overflow-hidden">
      <p className="font-inter text-[30px] text-slate-800 font-bold">Technologies & Tools We Use</p>
      <p className="w-[80%] font-inter text-[14px] mt-4 text-slate-600 text-center">
        At CodeWorks, we leverage the latest, most powerful, and scalable technologies to build high-performance software solutions for businesses of all sizes. Our expertise spans across frontend and backend development, mobile applications, cloud computing, artificial intelligence, and more. We carefully select tools that ensure speed, security, and seamless scalability, empowering businesses to stay ahead in the digital era.
      </p>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="flex space-x-12 animate-marquee">
          {[...logos, ...logos].map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt="tech-logo" className="h-20" />
          ))}
        </div>
      </div>

      {/* Tailwind keyframe animations */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
