
  import { ArrowRight } from "lucide-react";
  import CustomButton from "../components/UI/CustomButton";
  import bgimage from "/public/images/hg.jpg";

  const About = () => {
    return (
      <div className="pt-0">
        {/* Hero Section */}
          <section className="relative h-[100vh] bg-cover bg-center"   style={{ backgroundImage: `url(${bgimage})` }}
          >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Aachman Ayurveda</h1>
              <p className="text-xl max-w-3xl mx-auto">
                Our journey in bringing authentic Ayurvedic wellness to modern lifestyles
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Founded with a passion for authentic Ayurveda, Aachman Ayurveda was born from a vision to bridge ancient wellness wisdom with modern lifestyles. Our founder's personal journey with Ayurvedic healing inspired the creation of a brand that honors time-tested traditions while embracing scientific advancements.
                </p>
                <p>
                  We began our journey with extensive research into traditional Ayurvedic texts and practices, consulting with experts who have dedicated their lives to this ancient science. After years of formulation and testing, we developed our flagship products: Tond & Fit and our specialized Hair Loss solution.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to purity and efficacy. Every ingredient is meticulously sourced, every formula carefully balanced, and every product crafted with reverence for Ayurvedic principles.
                </p>
                <p>
                  Today, Aachman Ayurveda stands as a testament to the power of natural healing, offering solutions that address common wellness concerns without compromising on quality or authenticity. Our growing family of satisfied customers is our greatest pride and motivation to continue our mission of spreading holistic wellness across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-ayurveda-light">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-16 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl text-ayurveda">1</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                  Sourcing
                </h3>
                <p className="text-gray-700">
                  We handpick the finest herbs and ingredients from trusted sources, ensuring purity and potency in every element that goes into our formulations.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl text-ayurveda">2</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                  Formulation
                </h3>
                <p className="text-gray-700">
                  Our expert Ayurvedic practitioners develop balanced formulations according to traditional principles, enhanced by modern scientific understanding.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <span className="text-3xl text-ayurveda">3</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                  Production
                </h3>
                <p className="text-gray-700">
                  Each product is manufactured in certified facilities with strict quality control measures, preserving the integrity of the ingredients and formulations.
                </p>
              </div>
            </div>
          </div>
        </section>

          {/* Our Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-16 text-center">
                Our Values
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Authenticity
                    </h3>
                    <p className="text-gray-700">
                      We stay true to Ayurvedic principles, honoring traditional knowledge while incorporating modern scientific understanding.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Purity
                    </h3>
                    <p className="text-gray-700">
                      We never compromise on the quality of our ingredients or the integrity of our formulations, ensuring our products are as pure as nature intended.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Effectiveness
                    </h3>
                    <p className="text-gray-700">
                      We believe in creating products that deliver real results, helping our customers achieve their wellness goals naturally.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-6 text-ayurveda">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ayurveda-dark mb-3">
                      Sustainability
                    </h3>
                    <p className="text-gray-700">
                      We respect our planet by sourcing responsibly and minimizing our environmental footprint throughout our operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>




                  {/* Transformation Gallery Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark mb-12 text-center">
                Transformations with Aachman Ayurveda
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAyQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EAD8QAAIBAwIEBAMFBgQFBQAAAAECAwAEERIhBRMxQSJRYXEykaEGFEKBwSNSkrHR8BVTYuFyk6LC8RYkM1Rj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMAAQQFBv/EACQRAAICAQQDAAIDAAAAAAAAAAABAhEDBBIhMRNBUTJCFGGB/9oADAMBAAIRAxEAPwDkAtPpq3TS016ajyW4q00tNXaKbSKuibinTS01dpFLSKlE3FGmkVq/TS0VKL3FGilpq/RUgnpUom4H0ZqSxZ7UUkWT0ouK3z2oW0HBORnC39KYwYrcWzJHw1VLa47UG4d4zDMeKjprSeD0qkxelGhTTTAytNposxU3KqA2wbRS0UVyqflVC+QULUglEiKpCP0qiUwXRTiM46UVy6kIxipZe1gnLpcui9FLRVWVtK9JFLTQ1pxmzuMLKOS/zX59q0RGrKGQhlPQqcipDJGXQueGcHTKNJpsVeVxUSlMsDayrTSCGrhHVix1LL2sGEZqYiNFCKpiH0qWFsA+VVix0VyqcR1TYcYFcUW/StSxttbdKEjXBG1bHCmUOM+dZ8kuDXiijWtuCySRllUnasviXD+SxBByK9H4RPbrZAFlG29cl9pJI2mkKdM1jx5ZOdM25MUVC0cPPFgnahjH6Vo3BBJoYit0WYJR5BDHSEdEFaWKLcBtKOXTcuiMUsVLJtKNFLTirsVGpZdFemnxU++KVC2SiGKWKUkixqpb8TBR6k1Zyz5fWq3Im085XJ6GirW/ubTe3mdfMA7GggcVMsDuPlXJjKumdWUb7RtxfaK7ULzVjfA3JGCa1bPjdncACQ8lv9Xw/OuQVht09qtGgjYEHzBrRHPJCJ6eD9HewNFMCYpEYDuGFXc21j2kuIlP/EK4BOpwxBoiOV+4Dfzp8dRZnemro7b/ABHhyHBuV/IE0/8AivDQcc8+5U4rkEkVu+M+dXpAzDI3GNu9M8nwHxf0dI/G+HIPCZGPotWQ8W4fM2kSmM//AKDFc0lsc7ir1tgqDUcL6nFV5GGsKOt5R0hlGVIyCOhq2CQxMD0Brk7W/wDuI1xXyKvdSwI+VGQ/aS2HhuHVz2aEfpVPImWsbR2sHFnjjxqPzoG9vDKSTmsFePcOY/8AzMu2clasbidiV1ffIdJ/1UtbU7Dbl0XSHJzVLGg7rjVhCD+3EjD8MYzWdN9o7UA6ElY+1M8sV2B45Nm2WqsyAYyQM9M965ub7TjSwitxnsWb9KBuPtBcSuG0RAK2oLjO+39/nQPURQS08mdiZMd6ra8gQZeaNR6sK4K54jc3DFpZnOe2dqELk96W9X8Q1aT6zvLnj1jCqFZFlyRsD0HnWZdfahQ78hNSaSFztvk4J/LFcmXNMXOKTLUzY6Omijbl+0l87A5VUycqB1B7ZqM/2jv5c+MICwI0jBGPWsQvTa6U8s/o1YY/DSueL3102ZbhzjBABwAR0OPOm/xnif8A9uf/AJlZ3MIORTcw+dA5v6HsXwbmN50/MfOQxp9YB2UU4mZeir8qAMgHYb5q2OZh+I0wuXB2wPYCn5zsdyD+Qq7KaJGZ8/EadZ5V6SH51HW69Dt7U4lk8/pRWDSJpPKpBWRsjpvRMV/PGytrJ05oUTS+bflVoe4lQKdRHkaNSl6Akl7NBvtBd+DRyxgeLw51etBXHELi6bM0hOOgHSrzwe/Masseon8IIyKHuLO5tHxcxOg88ZzVty9kSj6IiQ9zVizMPxGqw0f78vtyx/WpxumRlZmGf3AP1qKZTgXC5YD4u1NJcMcAN0rd4LY2nFDLy7KSJYkBZnlyCflVHGLaxsnCNbTtqXKyLLkZ77HFV5F0E8TqzEMp86qZ80QfueM6bw/wVDNp2F1+emo5lKAKWPnTFqdiSTpzjtnrUd+9DusOhs02aWaRqixjUSafOKYtVNhJDU1PmlqJGCaEsamp6jULCQq1LQpqIpwT5USoU7J6V8hUlVfIVba2c90cRpt5npWnDwBjgzXCqO4C5psMUpdIRPNCP5My/BgYAoiKJmAZY9juGI2NdJaWljZqNMKu4/HIMmtJeIaVCr4VxjHatUdK/wBjJLVx/U5JYEzlsdtqKjflgaQK6L75BIfFFGQNsFBuamtxZ4wbeEjy0CnRw/BLz32YK3rDqT7miFvVdcPhh/qrZ5tvMwSOzjkY7ALHkmiDwmGziNxxL7pw6Jf3gGb5f+aGdQ/JjsUpT/FGLa8PW9BYWsIjc7u6gA/qaKuOCcMsRH94txNPKUEccYKDxMAC3cDJotuMasR8JgMCYx98uV1SMP8ASvQe5rEF6kfDbiS4mZna+wJZG1M5DjqepwBWefKtLg14+6b5NnhUsVtamO2jhjDsWfQ2A2Nu+T2oeW5WOQPNDbzorAGOTcYJHpRHB7dLrhwe2hmmjOfHHayPnc9wuKF4wqQWchkhlhxgmR4pEA375XH1rB7s6PG2gm44fwy9s1vRZKI5AGJChWQkZw2Pes2bgHDJTlY2T/hY1P7PcUkS5guLNywFnGrxZ8LYJBBHz39a171OG8Qi++8LuIYGOdUEjqoyDuBk7EHy2PpW+Eo0lNHNyxl3D/Uc7L9lLR1HKuJE6ZyAfes6X7LTh3RJkYqoI8JwfTNdDE779NtiQcjP5VcHcjenvBBq0jItTNHDXHBb+EnVbsQNyV3oGa1niOJIXU4zgqa9H1Pt6UvESM/WlvSJ9Mata12jzLHtTEV6DPwe1lREEYUKSRpHmcms6b7L2shzHM8epthttSJaTIuh8dZjfZxuKWK7GT7K27L+zmkVttzuB50LJ9kybpEjnbltklmUeEf1oHpsnwNarE/ZzBFNW+fste81VDIEOfGTsKo/9O3/APlGg8U/gxZofSi3sJ5z4I2x5sMCte14XHHgzeNvLoKI59MZ63Qwwj2c3JnyT64CVOkaRsPSpYLAEHbODQfP8zTSS7gB1DruMdaZPJtVIRHE2+QxywYovjI6aTtUHfTpySGJwMDOaojmOQeYA/n11HPT6VSLt5GwcmRcEAMMKM43+dc/LqpxuLNkNPFqw+MMoAbc1aG70Fa3KpDvGxJf9mjnrvt0wfrVzkMA6jIOPDvWjBrOKYjLpXdondRyTQkW87Qyjo6OVI+VZXHrQRWEJkuZ7iYvpLyyE4HkB5UbzSraW2PvWb9oZzI0al9xghANh6+9Fq5wrclbY3RrIpbb4R1ln93kVTzAFjjV3J/CO23mTsB3JoW3CHhF/I8QZ+fIdD4OMPnHl71m2Uy/ehIFIUplWdRknuemf5486ttDLLLFYopzc3bNIT+4G6D33z7Ck/yFNXL0aY4dsmo+z1Lh3GbnhvDLeKJjEiIAY1RcDvtt60HxzidzxPhN4kkkcmuM4HLwG22odoA6/tJB1+HJ/QVKNArFQ5Ax0Ck4zWDcdOjk7eWGDi6EKiwvaxLIQPhOTpPz61z/AA2xteJW/EVnJWRbkmOT93Oc7dwdq3OMQG34pKxQpHLEAAw6nJzj0yawOBSqi3ceCWMxO3QAVvjKM5xT6ObkUoQk12dFBJFbW0UCDIjQLnGM0jeL079qy+bqkZVYe9RWQtjG+fpW95oRVI5Sxzk7ZrffCNsVE3pwdqz443eZIv3hkHrmlcnROxceAnwjYH8/KkvVw3bQ1gl2aJvAdx0xv71AXnkay/vSspUAhsjr2FQ5586OGW0VPEzX+90/3vtnasfn+tPzjtR+RAeNmv8Ae9896X3usnnUudU8iJ42BZYAFsgedQ5p86K2ZcyRKxHiyp6Z6Z2oOWGVQXcAd8Zzj3rmY9Tu7Oj4iXPC6GZdQ6sD3q03sLlQI0BC7jfrvt3oAyj4TjB8xmq7jUjBYm+MeJUyM+9Lz8u7HY4mhJkY0eTeJDk49O1CwStEsm+gSKFwRljv1GahHMSAFBQjbIbJpkLSuqZJxk9MtWeuORu02oGIcc7xMuXz8WM9e3oaugkCtJGki6ichDsCMjIOff6UDzLdY1VQ2sb404znbftj19aa3d104xpVgMkjbv8A0pavkFqwhXUTETvoCHdm6D3rK4/dx3V7zLeN0jwAGk+J8bZrVvpEkHJY6VU5Kg5V++ceWTiucuHeaTmOxIOy+grQ57qXwPHjUeTehuVht4RsX5W2o5BPt5ZFbv2Ut0nlnvnBUACOIEDbz6n+965O3tjcn4WbHhwp6d9q7vhNtHDbQxoJcRDdFYDUT5jVSt1cD4RTZutdQLIFKnPcBE/rUZZEXfRIdRyNgP1odlhLagku3TMij/uoaUsrkxElQN9Uin/uobH0BfaR4WhhBRgx2JHl/eK4XhVxybmV3ICNkNnONzXY3wLtJ4vgUYyAWydz5+Qx+dcPayqH8a5GvODRY5VdGbLFWzfnyo1EYY/CEAAx/ZAorh/LFtpkDkMc6c6c7Y/v3oBsFNYkGlhkHzPlvRccb8jCgrpGXJOdu+AOmKvLluNGWMKZZrj+8xukkoiUYOpjsc9fbcd+1V3M7RMjPGSpdlIDliewzk9fbamt1EiMxJYjDaWOBvscfSqL5mliIXV4BoCsBke/lis0pNyRbiF3KQhldtzIuroo67fltQht3lmYLoBz8PkBtUEvCVga5UbLnT0G3fHsfpUrXiMKELJpKscMzbtjqR86OOXLjXADhfZTypOYyfjVsEVawIt0XwZKmTOBkD3/AEqULA3UiqQc7ZOdjmn4vMY0tInRcyKS22CMeYp71U3JRYPjV0DxqX31qBnGSabDfvxfx/7UTbIA40FXBTWPADnAzg753/v0v/wxP84fxf7U56lg+NAk93ygBHIVTOBhgMHzG3pQN3IjDxsd+pDfFQ7AO7a3CsDgH8Ofy6UNOrI51NtsMjyrPCJpUAhp0ETBVXfGMjcdfnQjv4hgjHpUMnpvjtTqxVs01jFGgjUoJ0+ILjxd81KBQ0hfWMjHbfPp8qoV84CnxbdSB9auRdGGKjI8WNiKolGhEFaYKk/xHxE7mtGJILYYHiXbUdWx9vWsSxYcxy7gEnPXA+dac1xbmBGTTkYJAOcZ/WkSTRVFXGLiRowp5WGwwKH89/X07VhEgEBc4Bq68l5tw7Y2ycDyqESFmHhJNOgqQRqcIuQiBeQzEHPwFgTv/Wurhv1jh2TBA2AhUisG1jghUIkUbTdWQSP9QCBRqQCVoiRLET0AnP5YDZ2pUkrsfBUjT/xC7aIokZjBGMmNM/ltvTQ3kzLHDNIkvvEFOf7NRjt1RC0txMpznTqGD86FczrOZhzEUj4t/wCdUHZO84ffs0krtLJaMNgq4K+fTpXGTxywzSIUcYfPnt2Oa6v7scOIrgEnsQdQ9sY/WsTitu8Z5qFXiDaNSrjfrvRQ44FZF7JQTStyxEgL9Ap6sfatG7k1qpkR45SMPn8RHTp/OufjcJJHqJROh09cUc/EWj+OQnQTuN9Xl1qp43fAlovhnKsZVH4SmlsHAIOwpreSTnKTnZSfFuRnof76flQdzeTPKsiQ5jYAgFc9u3yoNrgNLqAYL+IE9at47JQbM6xXgaMh/FlWBwvt086HWYuGZnLyYwu30prh9WgqxKgA6T2PfNVBsMDnLdj50ajwSjShmMALiNfGmAdJGkeY9ajcKzt+2cvtjzII7b1XbymVsSFgCoVc+dafLaZkSLTnA0qBjDHz3/2pdU7AoqDw25jk1akcDBGx05ydvQ0R/wC0/cX+If1qIjZEnaSEPqB0sMbH8u+31oLW/wC7/wBL0FWDtL2tUa6lYyodI1BlGQv+9UT2uhmWNuYSdlA0hdvPvVSxyJI55YQaT4fIEYB9MdaFnMq41uCW3GG7U2MZX2GosrZcHSZMnJXGfrVBwWwTj8qZmJO1JQW2Gc+XnTQyxQiN4nUjGdsmoyScxs4xn607RFRklaKtLZ2AZFEhxsoNQsaOJlUNJ0I3GRuKpdmPwg6O1aTxPcS6WHLjjwG1gnHShLgpJLmIYjAwu2M+uKi5I0DohI2+tHWS6JIpz0yRnyqu0tpLqYQxRsx6k+Q/SuhtrC65mnCBl2Kg9BgfP6UM5UqChG+R+Xyl5vLOonIGk5J9ztUnnubsl1XksF07oCSPPb86vnUKwEeCcDIDeEn2pTq7kMrtAdPWLYZPY/IUix4kYKyx3GJJz11eHPsCataBIyzTZOT8OThd9v79Kla4IMcjKW076jkn6VAyy27uphLHSWLM23rnPv60JfBTMkJ1B2Cg7KfI/OqbtnuENs8QKkYG42Yd81ZHOpTEUEJzsVPhByegOP6e1SWDlIzOrKSRqznOPf8A8UadFPk5CTZyjDLKdJxVEjHP0rY43bcuRZ8/s5QNwT1/P0rLdQcVoTtWZXwydtdMoSNnbSpypH4D7d6JezYs0ohjdTjcPhT54/vas3BxUhK+jl6jpP4c7VZZprBynWR3VX7rsCB5N6Y71C4t9KNNLGFw2NGobg9D17VRDd8uLGMEHO2Bk4x5UGSWYY3Paqoho2ml5AHwC2wznf5eVbtvyoXVrgtKmjViNsYGNgemMVzUMuh25nxYx0zitOK5h1RO82Na4JCByN++d/yzS5xsFxCJnQa5IGGlm+Ak+HYjGrft60Fv/nSf9P8AWo3cjJI3Kw6HJ1IMj5dhQPN/0J/DVKDKUS64laOVwm2FwPrQT/Ed6VKmoMlEoeTBoiFAJHx2pUqsg4iVbp06gedbUBL22vJXltsF2G1KlQMiK+KkxW6Rx+BZc68D4ulY/c+9KlRQ6JM1eHXD2lk80OA7PpJ9BvWzaSSB4f2hPNkBIIG3ttt0pUqTk9j8fRq2aq10ZGQEvDKCD2xn+lAyzcq5QoibuFOR1GTSpUpDCy+kZraWQndAuBjY7kUorePnKuDpO4UnKjr0Xp9O5pUqhCHFIktYS8Qwwd1z6YBoe8bkWc0sagMHVF64UHBOP5e1KlRRBkA8TVWsBleoLdT1wD+tYWkZ77DOKVKn4/xM+QGkGHIFQNKlRgjUqVKoWWjdcnqMCngnkgfVG5BHSmpVRDVswLoyiVVwg2AUCheYv+TF/DTUqEh//9k="   alt="Before and After 1" className="w-full h-auto rounded-xl shadow-md object-cover" />
                <img src="/public/images/re2.jpeg" alt="Before and After 2" className="w-full h-auto rounded-xl shadow-md object-cover" />
                <img src="/public/images/re3.jpeg" alt="Before and After 3" className="w-full h-auto rounded-xl shadow-md object-cover" />
                <img src="/public/images/re4.jpeg" alt="Before and After 4" className="w-full h-auto rounded-xl shadow-md object-cover" />
              </div>
            </div>  
          </section>





  
      </div>
    );
  };

  export default About;
