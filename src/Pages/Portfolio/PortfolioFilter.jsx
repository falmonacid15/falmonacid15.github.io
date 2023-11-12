import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const ProjectStyleTwoData = [    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-7.jpg',
        category: 'strategy',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-8.jpg',
        category: 'design',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-9.jpg',
        category: 'development',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-10.jpg',
        category: 'strategy',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-11.jpg',
        category: 'design',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-12.jpg',
        category: 'branding',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-13.jpg',
        category: 'development',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-14.jpg',
        category: 'marketing',
    },    
    {
        id: uuidv4(),
        image: '../../assets/img/portfolio/portfolio-15.jpg',
        category: 'marketing',
    },
];

const ProjectStyleTwoItem = ({ image }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 portfolio-item mt-30">
                <div className="portfolio__area-two-item"> 
                    <img className="img__full" src={image} alt="" />
					<div className="portfolio__area-two-item-content"> 
                        <span>Photography</span>
						<h4><Link to="/portfolio-details">Photography</Link></h4> 
                    </div>
				</div>
            </div>
        </>
    )
}
const CategoryBtn = ({ name, handleSetCategory, label, className }) => {
    return (
        <>
            <button className={className} type="button" onClick={() => handleSetCategory(name)}>
                {label}
            </button>
        </>
    )
}

const PortfolioFilter = () => {
    const [category, setCategory] = useState('all');
    const [projectStyleTwoItem, setProjectStyleTwoItem] = useState([]);
    useEffect(() => {
        category === 'all'
            ? setProjectStyleTwoItem(ProjectStyleTwoData)
            : setProjectStyleTwoItem(ProjectStyleTwoData.filter((data) => data.category === category));
    }, [category]);
    return (
        <div className="portfolio__area-two section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 mb-30">
                        <div className="portfolio__area-two-title"> 
                            <span className="subtitle-one">Portfolio</span>
                            <h2>Create Portfolio</h2> 
                        </div>
                        <div className="portfolio__area-two-btn">
                            <CategoryBtn className={category === 'all' ? 'active' : null} name="all" label="Show All" handleSetCategory={setCategory}/>
                            <CategoryBtn className={category === 'design' ? 'active' : null} name="design" label="Design" handleSetCategory={setCategory} />
                            <CategoryBtn className={category === 'development' ? 'active' : null} name="development" label="Development" handleSetCategory={setCategory} />
                            <CategoryBtn className={category === 'marketing' ? 'active' : null} name="marketing" label="Marketing" handleSetCategory={setCategory} />
                            <CategoryBtn className={category === 'strategy' ? 'active' : null} name="strategy" label="Strategy" handleSetCategory={setCategory} />
                            <CategoryBtn className={category === 'branding' ? 'active' : null} name="branding" label="Branding" handleSetCategory={setCategory} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {projectStyleTwoItem.map(
                        (item, length) =>
                            length <= '9' && (
                                <ProjectStyleTwoItem
                                    key={item.id}
                                    image={item.image}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PortfolioFilter;