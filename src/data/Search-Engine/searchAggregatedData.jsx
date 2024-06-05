import subservicesData from  "@data/dummy/subservices.json";
import servicesData from "@data/dummy/services.json";
import sectorsData from "@data/dummy/sectors.json";

export const aggregatedData = [
    ...sectorsData.sectors.map((sector) => ({
      id: sector.id,
      title: sector.title.english,
      previewTitle: sector.preview_title.english,
      shortDescription: sector.short.english,
      type: 'sector',
      link: `/sectors/${sector.id}`,
      keywords:sector.keywords
    })),
    ...servicesData.services.map((service) => ({
      id: service.id,
      title: service.title.english,
      previewTitle: service.preview_title.english,
      shortDescription: service.short.english,
      type: 'service',
      imgURL: service.imgURL,
      link: `/services/${service.id}`,
      keywords:service.keywords
    })),
    ...subservicesData.subservices.map((subservice) => ({
      id: subservice.id,
      title: subservice.title.english,
      previewTitle: subservice.title.english,
      shortDescription: subservice.short.english,
      type: 'subservice',
      imgURL: subservice.image,
      link: `/subservice/${subservice.id}`,
      keywords:subservice.keywords
    })),
  ];

