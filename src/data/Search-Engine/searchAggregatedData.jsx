import subservicesData from  "@data/dummy/subservices.json";
import servicesData from "@data/dummy/services.json";
import sectorsData from "@data/dummy/sectors.json";

export const aggregatedData = [
    ...sectorsData.sectors.map((sector) => ({
      id: sector.id,
      title:   {
        english : sector.title.english,
        arabic : sector.title.arabic
      } ,
      previewTitle: {
        english :   sector.preview_title.english,
        arabic :   sector.preview_title.arabic
      },
      shortDescription: {
        english : sector.short.english,
        arabic : sector.short.arabic
      },
      type: 'sector',
      link: `/sectors/${sector.id}`,
      keywords:sector.keywords
    })),
    ...servicesData.services.map((service) => ({
      id: service.id,
      title:   {
        english : service.title.english,
        arabic : service.title.arabic
      },
      previewTitle: {
        english :   service.preview_title.english,
        arabic :   service.preview_title.arabic
      },
      shortDescription:  {
        english : service.short.english,
        arabic : service.short.arabic
      },
      type: 'service',
      imgURL: service.imgURL,
      link: `/services/${service.id}`,
      keywords:service.keywords
    })),
    ...subservicesData.subservices.map((subservice) => ({
      id: subservice.id,
      title:   {
        english : subservice.title.english,
        arabic : subservice.title.arabic
      },
      previewTitle:  {
        english : subservice.title.english,
        arabic : subservice.title.arabic
      },
      shortDescription:  {
        english : subservice.short.english,
        arabic : subservice.short.arabic
      },
      type: 'subservice',
      imgURL: subservice.image,
      link: `/subservice/${subservice.id}`,
      keywords:subservice.keywords
    })),
  ];

