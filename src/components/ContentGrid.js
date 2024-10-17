import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import { supabase } from '../supabaseCliente';
import { Link } from 'react-router-dom';

const ContentGrid = () => {
  const [contentItems, setContentItems] = useState([]);
  
  const fechData = async () => {

    try {
      const { data: items, error } = await supabase
      .schema('aurora_refugio')
      .from('guides_manuals')
      .select('*')

      if (error) throw error

      setContentItems(items)

      
    } catch (error) {
      console.log("Erro na busca de dados", error.message)
    }
  };

  useEffect(() => {
    fechData()
  }, []);
  
  //console.log(contentItems)
  return (
    <section className="max-w-screen-xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {contentItems.map((item, index) => (
        <Link to={`/form/${item.guide_id}/${item.title}`} className="block">
          <ContentCard 
          key={index}
          imgSrc={item.imgSrc|| 'placeholder.png'} 
          title={item.title} 
          description={item.content} />
        </Link>
      ))}
    </section>
  );
};

export default ContentGrid;
