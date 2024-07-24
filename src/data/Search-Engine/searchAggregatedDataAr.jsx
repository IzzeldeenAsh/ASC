import subservicesData from  "@data/dummy/subservices.json";
import servicesData from "@data/dummy/services.json";
import sectorsData from "@data/dummy/sectors.json";

export const aggregatedDataAr = [
  ...sectorsData.sectors.map((sector) => ({
    id: sector.id,
    title: sector.title.arabic,
    previewTitle: sector.preview_title.arabic,
    shortDescription: sector.short.arabic,
    type: 'sector',
    link: `/sectors/${sector.id}`,
    keywords:sector.keywords
  })),
  ...servicesData.services.map((service) => ({
    id: service.id,
    title: service.title.arabic,
    previewTitle: service.preview_title.arabic,
    shortDescription: service.short.arabic,
    type: 'service',
    imgURL: service.imgURL,
    link: `/services/${service.id}`,
    keywords:service.keywords
  })),
  ...subservicesData.subservices.map((subservice) => ({
    id: subservice.id,
    title: subservice.title.arabic,
    previewTitle: subservice.title.arabic,
    shortDescription: subservice.short.arabic,
    type: 'subservice',
    imgURL: subservice.image,
    link: `/subservice/${subservice.id}`,
    keywords:subservice.keywords
  })),
  ];

