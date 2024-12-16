
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/Component/ui/breadcrumb"
  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
  
  } from "@/Component/ui/pagination"
import ServiceSection from "../components/servicesection";
import Image from "next/image";
import ProductCard from "../cards/ProductCard";
  
  

function ShopPage(){
    return(
        <>
        <section className="Hero_Section w-full h-[320px] flex flex-col justify-center items-center">
            <h2 className="text-[52px] font-bold">Shop</h2>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

        </section>
        <div className="">
            <Image src="/shop-1.png" alt="tag" width={1590} height={100}/>
        </div>

        <ProductCard />
        
    
        <Pagination>
        <PaginationContent className="flex gap-[38px] mt-10">
          <PaginationItem>
            <PaginationLink href="/shop?page=1" isActive className="bg-customBrown text-white border rounded-md size-16"> 
                1
            </PaginationLink>
          </PaginationItem >
          <PaginationItem >
            <PaginationLink href="/shop?page=2" isActive className="bg-customPink text-black size-16">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/shop?page=3" isActive className="bg-customPink text-black size-16">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/shop?type=next" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

        <ServiceSection />

        </>
    );
};

export default ShopPage;