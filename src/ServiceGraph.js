import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './index.css';

const ServiceGraph = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {

        // Set up the SVG canvas dimensions
        const svg = d3.select(svgRef.current)
                      .attr('width', 800)
                      .attr('height', 600);
    
        // Clear previous elements
        svg.selectAll('*').remove();
    
        const width = 800;
        const height = 600;

        // Tooltip for nodes
        const tooltipNode = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.7)')
            .style('color', '#fff')
            .style('padding', '5px')
            .style('border-radius', '5px')
            .style('pointer-events', 'none')
            .style('opacity', 0);

        // Tooltip for edges
        const tooltipEdge = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('background', 'rgba(0, 0, 0, 0.7)')
            .style('color', '#fff')
            .style('padding', '5px')
            .style('border-radius', '5px')
            .style('pointer-events', 'none')
            .style('opacity', 0);

        // Set up simulation for nodes and links
        const simulation = d3.forceSimulation(data.nodes)
            .force('link', d3.forceLink(data.links).id(d => d.id).distance(150))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2));
    
        // Add links (edges)
        const link = svg.append('g')
            .selectAll('line')
            .data(data.links)
            .enter()
            .append('line')
            .attr('stroke-width', d => Math.sqrt(d.value))
            .attr('stroke', '#999')
            .on("mouseover", (event, d) => {
                tooltipEdge.transition().duration(200).style('opacity', .9);
                tooltipEdge.html(`<strong>Latency:</strong> ${d.latency} ms<br/>
                                  <strong>Invocations:</strong> ${d.invocations}`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 20) + 'px');
            })
            .on("mousemove", (event) => {
                tooltipEdge.style('left', (event.pageX + 10) + 'px')
                           .style('top', (event.pageY - 20) + 'px');
            })
            .on("mouseout", () => {
                tooltipEdge.transition().duration(200).style('opacity', 0);
            });
    
        // Add nodes
        const node = svg.append('g')
            .selectAll('circle')
            .data(data.nodes)
            .enter()
            .append('circle')
            .attr('r', 20)
            .attr('fill', d => d.color)
            .attr('stroke', d => d.borderColor)
            .attr('stroke-width', 4)
            .call(d3.drag()
                .on('start', dragStarted)
                .on('drag', dragged)
                .on('end', dragEnded))
            .on("mouseover", (event, d) => {
                tooltipNode.transition().duration(200).style('opacity', .9);
                tooltipNode.html(`<strong>Service:</strong> ${d.name}<br/>
                                  <strong>Port:</strong> ${d.port}<br/>
                                  <strong>Namespace:</strong> ${d.namespace}<br/>
                                  <strong>Cluster:</strong> ${d.cluster}<br/>
                                  <strong>Success Rate:</strong> ${d.successRate}%`)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 20) + 'px');
            })
            .on("mousemove", (event) => {
                tooltipNode.style('left', (event.pageX + 10) + 'px')
                           .style('top', (event.pageY - 20) + 'px');
            })
            .on("mouseout", () => {
                tooltipNode.transition().duration(200).style('opacity', 0);
            });
    
        // Add node labels
        const label = svg.append('g')
            .selectAll('text')
            .data(data.nodes)
            .enter()
            .append('text')
            .attr('dy', 4)
            .attr('dx', -10)
            .text(d => d.name)
            .style('font-size', '12px')
            .style('fill', '#333');
    
        // Add icons to nodes (Service Type Icon)
        node.append('image')
            .attr('xlink:href', d => d.icon)
            .attr('x', -12)
            .attr('y', -12)
            .attr('width', 24)
            .attr('height', 24);
    
        // Simulation tick update
        simulation.on('tick', () => {
            link.attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);
    
            node.attr('cx', d => d.x)
                .attr('cy', d => d.y);
    
            label.attr('x', d => d.x)
                 .attr('y', d => d.y - 25);
        });
    
        // Drag functions
        function dragStarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
    
        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }
    
        function dragEnded(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        // Cleanup tooltips on unmount
        return () => {
            tooltipNode.remove();
            tooltipEdge.remove();
        };
        
    }, [data]);

    return <svg ref={svgRef}></svg>;
}

export default ServiceGraph;



