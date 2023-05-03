import React from 'react'
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import { motion } from 'framer-motion';

const Footer = (props) => {
  return (
    <div className='mt-12 text-center bg-black-100'>
      <div className={`${styles.padding}`}>
        <motion.div variants={textVariant()}>
          <p >Copy Right &copy; All rights rererved Abdullah Al Mamun</p>
          
        </motion.div>
      </div>
    </div>
  )
}



export default Footer
