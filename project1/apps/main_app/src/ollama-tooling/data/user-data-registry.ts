import { getBioData } from './data-implementations/bio.tool';
import { getEducation } from './data-implementations/education.tool';
import { getProfessionalExp } from './data-implementations/experience.tool';

export const userDataRegistry = {
  getBioData,
  getEducation,
  getProfessionalExp,
};
