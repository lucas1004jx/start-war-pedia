import React from 'react';

export const PeopleInfo=({info,homeworld,specie})=>(
    <React.Fragment>
              <p>name: <span >{info.name}</span></p>
              <p>height: <span >{info.height}cm</span></p>
              <p>mass: <span >{info.mass}kg</span></p>
              <p>gender: <span >{info.gender}</span></p>
              <p>birthday: <span>{info.birth_year}</span></p>
              <p>hair color: <span>{info.hair_color}</span></p>
              <p>skin color: <span>{info.skin_color}</span></p>
              <p>specie: <span>{specie}</span></p>
              <p>homeworld: <span >{homeworld}</span></p>
            </React.Fragment> 
)

export const PlanetsInfo=({info})=>(
  <React.Fragment>
    <p>name: <span >{info.name}</span></p>
  <p>diameter: <span>{info.diameter}km</span></p>
  <p>climate: <span >{info.climate}</span></p>
  <p>gravity: <span >{info.gravity}</span></p>
  <p>population: <span>{info.population}</span></p>
</React.Fragment> 
)



export const FilmsInfo=({info})=>(
  <React.Fragment>
    <p>title: <span >{info.title}</span></p>
  <p>episode: <span>{info.episode_id}</span></p>
  <p>director: <span >{info.director}</span></p>
  <p>producer: <span >{info.producer}</span></p>
  <p>data: <span>{info.release_date}</span></p>
  <p>opening: <span>{info.opening_crawl}</span></p>
</React.Fragment> 
)

export const SpeciesInfo=({info})=>(
  <React.Fragment>
    <p>name: <span >{info.name}</span></p>
  <p>classification: <span>{info.infoclassification}</span></p>
  <p>average height: <span >{info.average_height}</span></p>
  <p>average life: <span >{info.average_lifespan}</span></p>
  <p>language: <span>{info.language}</span></p>
</React.Fragment> 
)

export const VehiclesInfo=({info})=>(
  <React.Fragment>
    <p>name: <span >{info.name}</span></p>
    <p>model: <span>{info.model}</span></p>
    <p>cost: <span >{info.cost_in_credits}</span></p>
    <p>crew: <span >{info.crew}</span></p>
    <p>passengers: <span>{info.passengers}</span></p>
  </React.Fragment> 
)

export const StarshipsInfo=({info})=>(
  <React.Fragment>
    <p>name: <span >{info.name}</span></p>
    <p>model: <span>{info.model}</span></p>
    <p>cost: <span >{info.cost_in_credits}</span></p>
    <p>crew: <span >{info.crew}</span></p>
    <p>passengers: <span>{info.passengers}</span></p>
  </React.Fragment>
)