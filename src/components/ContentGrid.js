import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import { supabase } from '../supabaseCliente';

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
        <ContentCard 
        key={index}
        guide_id= {item.guide_id}
        imgSrc={item.imgSrc|| 'placeholder.png'} 
        title={item.title} 
        description={item.content} />
      ))}
    </section>
  );
};

export default ContentGrid;
