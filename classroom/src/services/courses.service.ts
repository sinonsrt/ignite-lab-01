import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateCourseParams } from './DTO/CourseService';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  listAllCourses() {
    return this.prisma.course.findMany();
  }

  getCourseById(id: string) {
    return this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  getCourseBySlug(slug: string) {
    return this.prisma.course.findUnique({
      where: {
        slug,
      },
    });
  }

  async createCourse({ title, slug }: CreateCourseParams) {
    const courseSlug = slug ?? slugify(title, { lower: true });

    const courseAlreadyExists = await this.prisma.course.findUnique({
      where: {
        slug: courseSlug,
      },
    });

    if (courseAlreadyExists) {
      throw new Error('Course already exists!');
    }

    return this.prisma.course.create({
      data: {
        title,
        slug: courseSlug,
      },
    });
  }
}
