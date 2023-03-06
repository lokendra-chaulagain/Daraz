import ProductFooter from "@/src/components/product/ProductFooter";
import ProductNavbar from "@/src/components/product/ProductNavbar";
import ProductPromotion from "@/src/components/product/ProductPromotion";
import RecommendedBySeller from "@/src/components/product/RecommendedBySeller";
import SingleProductCarousel from "@/src/components/product/SingleProductCarousel";
import VendorDetail from "@/src/components/product/VendorDetail";
import React from "react";

export default function SingleProduct() {
  return (
    <div
      className="position-relative d-flex flex-column justify-content-between overflow-hidden bg_blue_grey"
      style={{ height: "100vh" }}>
      <ProductNavbar />

      <div className="overflow-y-scroll overflow-x-hidden">
        <SingleProductCarousel />
        <ProductPromotion />
        <RecommendedBySeller />
        <VendorDetail />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque corrupti quo temporibus repellendus reprehenderit error tempora repudiandae consequuntur iure hic nulla aliquid commodi accusantium, facere, ut ratione dolorem maxime eum, vitae enim. Nihil optio necessitatibus officia nesciunt laboriosam voluptas neque doloremque rem sint laborum id dolorum, molestias omnis modi voluptatum cum beatae ullam? Maxime, delectus ut nihil at quas sed blanditiis in ipsam rerum sit animi
          magni nisi officiis id. Sint voluptatibus veritatis in ea optio amet, dolorem animi deserunt nihil atque obcaecati maiores? Eos libero vel dolorum illum, provident quisquam odit explicabo eius expedita soluta minima, tempora consequatur. Repellendus pariatur eaque, temporibus ipsa animi maiores ducimus? Iste dolore natus atque commodi eveniet minus nostrum quas quasi numquam dolores hic eum totam ad laborum distinctio, itaque sit fuga est ea. Molestias aliquam accusamus suscipit
          provident facilis cumque, excepturi obcaecati deleniti facere velit aspernatur enim labore consequatur illum pariatur, fugiat quibusdam aperiam architecto nisi earum non unde quae laboriosam fuga! Molestiae deleniti, est, magnam sequi magni dolorum facilis molestias reprehenderit omnis asperiores similique praesentium natus consequuntur cumque commodi fugit provident, exercitationem voluptatem! Eius natus veniam unde quas! Optio laudantium esse obcaecati fugit deleniti eos quas,
          officia labore quaerat quam corrupti inventore qui amet facere voluptas. Eveniet officiis laboriosam voluptate earum, dicta adipisci accusamus laudantium illum quidem excepturi rem, voluptatum velit! Corporis in commodi id sed eveniet optio voluptatum ad vitae fugit animi quaerat, totam error consequatur est beatae soluta culpa! Voluptas id neque, aliquid ullam sequi eveniet eius assumenda inventore voluptatibus qui nisi alias eos veritatis ducimus totam recusandae tempore, eaque
          beatae ipsum nulla adipisci molestiae voluptate. Aliquid eaque corrupti sequi at dolorum et ut quibusdam ea sunt, obcaecati quos autem! Distinctio eius nemo autem quis? Excepturi error ex sunt quo, amet, libero architecto quisquam quia dolores eaque eius delectus adipisci! Dignissimos excepturi sequi modi repellendus temporibus incidunt beatae blanditiis asperiores odit animi, quis quo cum! Consequuntur dignissimos laborum dolorum quia fugiat suscipit autem ab illum iste ducimus earum
          incidunt optio nisi quasi, error expedita, quod libero dolores, nostrum laboriosam quae eius pariatur? Cum magni, esse fugiat blanditiis, eum illo possimus eveniet nemo soluta vel enim non repellat expedita quaerat porro itaque sed ut corporis suscipit quos tenetur iusto ipsum! Dignissimos, veritatis? Maxime amet ipsa earum veritatis labore quam suscipit architecto itaque dicta accusamus quia repellat laboriosam praesentium doloribus repudiandae ducimus vitae incidunt distinctio
          voluptatum pariatur mollitia, molestiae porro ipsam! Assumenda corrupti unde illo quia adipisci pariatur eligendi dolores magnam fuga? Culpa quas quis deserunt rem, illum porro, vero consequuntur minima saepe deleniti sapiente? Iste soluta repellendus, excepturi nihil exercitationem necessitatibus officia expedita magni neque, totam dolor autem debitis deserunt labore, reprehenderit in suscipit temporibus voluptatibus! Nesciunt natus maxime consequatur consectetur doloremque quasi
          corrupti libero? Fuga laboriosam officiis dicta totam dolore doloribus quasi odit quos vero tenetur, exercitationem vitae placeat ipsum voluptatum quae deserunt, in quam facilis cum. Quia quibusdam doloremque deleniti similique. Excepturi at porro debitis quae iusto soluta deserunt, repellendus sit aliquid necessitatibus magnam ullam laborum, magni voluptas doloremque?
        </p>
      </div>

      <div className="mt-2">
        <ProductFooter />
      </div>
    </div>
  );
}
