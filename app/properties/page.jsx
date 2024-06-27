import PropertyCard from "@/components/PropertyCard";
import { NO_PROPERTIES_FOUND } from "@/lib/constants";
import properties from "@/lib/properties.json";
import { isEmpty } from "@/utils/utils";

const PropertiesPage = () => {
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {isEmpty(properties) ? (
          <span>{NO_PROPERTIES_FOUND}</span>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} {...property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
