import React from "react";
import { motion } from "framer-motion";
import { Building, GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export const ExperienceEducation = ({
  experience,
  education,
  certifications,
  achievements,
}) => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in technology and professional development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-blue-600" />
              Professional Experience
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line"></div>
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative pl-12 pb-8"
                >
                  <div className="absolute left-2 top-2 w-4 h-4 timeline-dot rounded-full"></div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      {exp.current && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-blue-600 font-medium mb-1">
                      {exp.company}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin className="mr-1 h-3 w-3" />
                      <span>
                        {exp.location} • {exp.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="mr-1 h-3 w-3" />
                      <span>
                        {exp.period} • {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-purple-600" />
              Education & More
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg p-6 border border-gray-200 mb-6"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-blue-600 font-medium mb-1">
                  {edu.institution}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="mr-1 h-3 w-3" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="mr-1 h-3 w-3" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{edu.gpa}</p>
                <p className="text-gray-600 text-sm">{edu.description}</p>
              </motion.div>
            ))}
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="mr-3 h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-gray-900">
                        {achievement.title}
                      </h5>
                      <p className="text-purple-600 text-sm">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
