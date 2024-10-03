const allProducts = [
  {
    title: "Accounting Tool",
    description:
      "Our Accounting Tool is designed to streamline financial management for businesses of all sizes. It simplifies bookkeeping, tracks expenses, generates financial reports, and ensures compliance with accounting standards. This tool helps businesses maintain accurate financial records and make informed decisions.",
    image: "/images/accounting.jpg",
  },
  {
    title: "E-invoice Tool",
    description:
      "The E-invoice Tool automates the invoicing process, allowing businesses to create, send, and track invoices electronically. It ensures accuracy and speeds up payment collection while complying with legal regulations. The tool supports customizable templates and integrates with various accounting systems for seamless financial management.",
    image: "/images/e-invoice.jpg",
  },
  {
    title: "Company Website Template",
    description:
      "Our Company Website Template provides a professional and customizable solution for businesses to establish their online presence. The template is responsive, SEO-friendly, and easily adaptable to meet different branding needs. It offers a range of features to showcase products, services, and company information, helping businesses attract and engage customers online.",
    image: "/images/website.jpg",
  }
];

const allServices = [
  {
    title: "Custom Software Development",
    description:
      "We design and develop tailored software solutions to meet the unique needs of your business. From concept to deployment, we ensure scalable, efficient, and secure software that drives success.",
    image: "/images/custom_software.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Our mobile app development team creates intuitive and robust apps for iOS and Android platforms. We focus on user experience, performance, and scalability to help your business engage customers on the go.",
    image: "/images/mobile_app.jpg",
  },
  {
    title: "Web Application Development",
    description:
      "We build powerful and scalable web applications using the latest technologies. From e-commerce platforms to SaaS applications, we deliver solutions that provide seamless user experiences and meet business objectives.",
    image: "/images/web_app.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Our expert UI/UX designers craft engaging, intuitive, and visually appealing designs. We prioritize the user journey, ensuring your products deliver a flawless and enjoyable experience for your customers.",
    image: "/images/ui_ux_design.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "Leverage the power of the cloud to scale your business. Our cloud services offer secure, scalable, and cost-effective solutions for infrastructure, storage, and application deployment, tailored to your business needs.",
    image: "/images/cloud_solutions.jpg",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {allProducts.map((product, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h2 className="text-4xl font-bold mb-4 text-center">Our Products</h2>
  //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {[
  //         "Custom Software Development",
  //         "Mobile App Development",
  //         "Web Application Development",
  //         "UI/UX Design",
  //         "Cloud Solutions",
  //       ].map((service) => (
  //         <div key={service} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
  //           <h3 className="text-xl font-semibold mb-2">{service}</h3>
  //           <p>Detailed description of {service}.</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Products;