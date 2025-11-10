import { Entity, Column, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import type { User } from '../../users/entities/user.entity';

export enum FileType {
  IMAGE = 'image',
  MODEL = 'model',
  TEXTURE = 'texture',
  DOCUMENT = 'document',
  OTHER = 'other',
}

@Entity('files')
export class File extends BaseEntity {
  @Column({ name: 'original_name' })
  originalName: string;

  @Column({ name: 'stored_name' })
  fileName: string;

  @Column({ name: 'path' })
  filePath: string;

  @Column({ name: 'mime_type' })
  mimeType: string;

  @Column({ name: 'size' })
  fileSize: number;

  @Column({ name: 'uploaded_by', nullable: true })
  uploadedBy?: number;

  @Column({
    type: 'enum',
    enum: FileType,
    default: FileType.OTHER,
    nullable: true
  })
  type?: FileType;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;

  // Relations
  @ManyToOne(() => require('../../users/entities/user.entity').User, { nullable: true })
  @JoinColumn({ name: 'uploaded_by' })
  uploader?: User;

  // Computed properties for URLs
  get computedUrl(): string {
    return `/uploads/${this.fileName}`;
  }

  get fullUrl(): string {
    return `${process.env.BASE_URL || 'http://localhost'}${this.computedUrl}`;
  }

  // Add url property for backward compatibility in API responses
  get url(): string {
    return this.computedUrl;
  }

  // Virtual field to expose computed URL in API responses
  toJSON() {
    return {
      ...this,
      url: this.computedUrl,
      fullUrl: this.fullUrl
    };
  }
}
