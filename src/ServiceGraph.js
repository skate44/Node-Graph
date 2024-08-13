import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

const ServiceGraph = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {

        // Set up the SVG canvas dimensions
        const svg = d3.select(svgRef.current)
                      .attr('width', 800)
                      .attr('height', 600);
        
        svg.selectAll('*').remove();

    },[data]);

    return <svg ref={svgRef}></svg>;
};

export default ServiceGraph;