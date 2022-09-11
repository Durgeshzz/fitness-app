import React from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'

import { exerciseOptions, fetchData, youtubeOptions } from '../assets/utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/SimilarExercise'


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setexerciseVideos] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])

  const {id} = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
      exerciseOptions)
      setExerciseDetail(exerciseDetailData)
      //console.log(exerciseDetailData.target)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=
      ${exerciseDetailData.name}`, youtubeOptions)
      setexerciseVideos(exerciseVideosData.contents)

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
 

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData)
    }
    fetchExercisesData()
  }, [id])
  

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos ExerciseVideos={exerciseVideos} name ={exerciseDetail.name}/>
      <SimilarExercise targetMuscleExercises= {targetMuscleExercises} equipmentExercises= {equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail