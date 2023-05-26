import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarCards from './CarCards';

const ShopByCategory = () => {
  const [toys, setToys] = useState([])
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://toy-bazar-server-red.vercel.app/car/all`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data);
      })
  }, [])

  useEffect(() => {
    fetch('https://toy-bazar-server-red.vercel.app/car')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
  }, [])




  return (
    <div data-aos="fade-right" data-aos-delay="500" className='grid' >
      <Tabs>
        <TabList>
          {
            categories?.map((category, index) => <Tab
              key={index}>{category.category_name}</Tab>)
          }
        </TabList>

        {categories?.map((category) => (
          <TabPanel key={category.category_id}>
            <div className="grid md:grid-cols-3 gap-4">
              {toys
                ?.filter((toy) => toy.category_id === category.category_id)
                .map((toy) => (
                  <CarCards key={toy.toy_id} toy={toy} />
                ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
